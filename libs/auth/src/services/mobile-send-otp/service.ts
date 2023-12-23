import { SupabaseClient } from '@supabase/supabase-js';
import {
  MobileSendOTPRequest as MobileSendOTPRequest,
  MobileSendOTPResponse as MobileSendOTPResponse,
} from './types';

export async function mobileSendOTP(
  supabase: SupabaseClient,
  args: MobileSendOTPRequest
): Promise<MobileSendOTPResponse> {
  const { data, error } = await supabase.functions.invoke<{
    success: boolean;
    message: string;
    mobile: string;
    isNewUser: boolean;
  }>('auth-send-mobile-otp', {
    body: {
      mobile: args.mobile,
    },
  });

  if (error || !data || !data?.success) {
    throw new Error(data?.message ?? error?.message ?? 'Unknown error');
  }

  return data;
}
