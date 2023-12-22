import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { AuthError } from '@supabase/supabase-js';
import useSWRMutation from 'swr/mutation';
import {
  LoginWithEmailRequest,
  LoginWithEmailResponse,
  loginWithEmail,
} from '../services/login-with-email';
import { AuthSWRKeys } from './keys';

export const useLoginWithEmail = () => {
  const supabase = useSupabaseClient();

  return useSWRMutation<
    LoginWithEmailResponse,
    AuthError,
    string,
    LoginWithEmailRequest
  >(AuthSWRKeys.LOGIN, (_, { arg }) => loginWithEmail(supabase, arg));
};
