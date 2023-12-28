import { CORSHeaders } from '../_shared/cors.ts';
import { sendOTP } from '../_shared/fast2sms.ts';
import { generateOTP } from '../_shared/otp.ts';
import { createSupabaseAdminClient } from '../_shared/supabase.ts';
import { checkUserExists } from '../_shared/user.ts';

import { z } from 'zod';
import { IndianMobileSchema } from '../_shared/zod.ts';

const reqSchema = z.object({
  mobile: IndianMobileSchema,
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
      headers: { ...CORSHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }

  const { mobile } = body.data;
  const supabaseAdmin = createSupabaseAdminClient();

  const userExists = await checkUserExists(supabaseAdmin, mobile);
  const otp = generateOTP(mobile);

  const r = await sendOTP(mobile, otp);
  if (!r) {
    return new Response(JSON.stringify({ error: 'Failed to send OTP' }), {
      headers: { ...CORSHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }

  return new Response(
    JSON.stringify({
      mobile,
      message: 'OTP sent successfully',
      success: true,
      isNewUser: !userExists,
    }),
    {
      headers: { ...CORSHeaders, 'Content-Type': 'application/json' },
    }
  );
});
