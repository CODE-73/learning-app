import { useSupabaseClient } from '@learning-app/supabase';
import { AuthError } from '@supabase/supabase-js';
import useSWRMutation from 'swr/mutation';
import {
  LoginWithMobileRequest,
  LoginWithMobileResponse,
  loginWithMobile,
} from '../services/login-with-mobile';
import { AuthSWRKeys } from './keys';

export const useLoginWithMobile = () => {
  const supabase = useSupabaseClient();

  return useSWRMutation<
    LoginWithMobileResponse,
    AuthError,
    string,
    LoginWithMobileRequest
  >(AuthSWRKeys.LOGIN, (_, { arg }) => loginWithMobile(supabase, arg));
};
