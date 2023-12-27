import { Session, SupabaseClient, User } from '@supabase/supabase-js';
import { MobileVerifyOTPRequest, MobileVerifyOTPResponse } from './types';

export async function mobileVerifyOTP(
  supabase: SupabaseClient,
  args: MobileVerifyOTPRequest
): Promise<MobileVerifyOTPResponse> {
  const { data, error } = await supabase.functions.invoke<{
    success: boolean;
    message: string;
    mobile: string;
    user: User;
    session: Session;
  }>('auth-verify-mobile-otp', {
    body: {
      mobile: args.mobile,
      otp: args.otp,
      fullName: args.fullName,
    },
  });

  if (error || !data || data?.success) {
    throw new Error(data?.message ?? error?.message ?? 'Unknown error');
  }

  const { data: setSession, error: sessionErr } =
    await supabase.auth.setSession(data.session);
  if (sessionErr || !setSession) {
    throw new Error(sessionErr?.message ?? 'Unknown error');
  }

  return data;
}
