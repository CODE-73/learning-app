import { useSupabaseClient } from '@learning-app/supabase';
import { AuthError } from '@supabase/supabase-js';
import useSWRMutation from 'swr/mutation';
import {
  MobileVerifyOTPRequest,
  MobileVerifyOTPResponse,
  mobileVerifyOTP,
} from '../services/mobile-verify-otp';
import { AuthSWRKeys } from './keys';

export const useVerifyMobileOTP = () => {
  const supabase = useSupabaseClient();

  return useSWRMutation<
    MobileVerifyOTPResponse,
    AuthError,
    string,
    MobileVerifyOTPRequest
  >(AuthSWRKeys.LOGIN, (_, { arg }) => mobileVerifyOTP(supabase, arg));
};
