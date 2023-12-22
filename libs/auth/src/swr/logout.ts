// useLogout.ts
import useSWRMutation from 'swr/mutation';
import { AuthSWRKeys } from './keys';
import { useSupabaseClient } from '@learning-app/supabase';
import { AuthError } from '@supabase/supabase-js';
import { logout } from '../services/logout/service';
import { LogoutResponse } from '../services/logout';

export const useLogout = () => {
  const supabase = useSupabaseClient();

  return useSWRMutation<LogoutResponse, AuthError, string>(
    AuthSWRKeys.LOGOUT,
    () => logout(supabase)
  );
};
