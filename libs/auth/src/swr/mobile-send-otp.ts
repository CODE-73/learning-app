import { useSupabaseClient } from '@learning-app/supabase';
import { AuthError } from '@supabase/supabase-js';
import useSWRMutation from 'swr/mutation';
import {
  MobileSendOTPRequest,
  MobileSendOTPResponse,
  mobileSendOTP,
} from '../services/mobile-send-otp';
import { AuthSWRKeys } from './keys';

export const useSendMobileOTP = () => {
  const supabase = useSupabaseClient();

  return useSWRMutation<
    MobileSendOTPResponse,
    AuthError,
    string,
    MobileSendOTPRequest
  >(AuthSWRKeys.LOGIN, (_, { arg }) => mobileSendOTP(supabase, arg));
};
