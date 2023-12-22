import { z } from 'zod';
import { IndianMobileSchema } from '../_shared/zod.ts';
import { CORSHeaders } from '../_shared/cors.ts';
import { createSupabaseAdminClient } from '../_shared/supabase.ts';
import { validateOTP } from '../_shared/otp.ts';
import { checkUserExists, getUserPassword } from '../_shared/user.ts';

const reqSchema = z.object({
  mobile: IndianMobileSchema,
  otp: z.string().min(1, 'OTP is required'),
  fullName: z.string().optional(),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORSHeaders });
  }
  const { success, ...body } = reqSchema.safeParse(
    await req.json().catch(() => ({}))
  );
  if (!success || 'error' in body) {
    return new Response(JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }

  const { mobile, otp, fullName = 'John' } = body.data;

  const supabaseAdmin = createSupabaseAdminClient();
  const isValidOTP = validateOTP(mobile, otp);

  if (!isValidOTP) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Invalid OTP',
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }

  const userExists = await checkUserExists(supabaseAdmin, mobile);
  const pwd = getUserPassword(mobile);

  if (!userExists) {
    // Signup!
    const { error, data } = await supabaseAdmin.auth.admin.createUser({
      phone: mobile,
      phone_confirm: true,
      password: pwd,
    });

    if (error) {
      return new Response(
        JSON.stringify({
          error: error.message,
          success: false,
          message: 'Signup failed',
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          status: 400,
        }
      );
    }

    await supabaseAdmin
      .from('Profile')
      .update({
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ').slice(1).join(' '),
      })
      .eq('id', data.user.id);
  }

  const { data, error } = await supabaseAdmin.auth.signInWithPassword({
    phone: mobile,
    password: pwd,
  });

  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
        success: false,
        message: 'Login failed',
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }

  return new Response(
    JSON.stringify({
      mobile,
      user: data.user,
      session: data.session,
      fullName,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
});
