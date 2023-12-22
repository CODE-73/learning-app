import { SupabaseClient } from '@supabase/supabase-js';
import { LoginWithMobileRequest, LoginWithMobileResponse } from './types';

export async function loginWithMobile(
  supabase: SupabaseClient,
  args: LoginWithMobileRequest
): Promise<LoginWithMobileResponse> {
  const { data, error } = await supabase.auth.signInWithOtp({
    phone: args.mobile,
  });

  if (error) {
    throw error;
  }

  return data;
}
