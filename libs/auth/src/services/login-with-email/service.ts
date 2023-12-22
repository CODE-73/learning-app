import { SupabaseClient } from '@supabase/supabase-js';
import { LoginWithEmailRequest, LoginWithEmailResponse } from './types';

export async function loginWithEmail(
  supabase: SupabaseClient,
  args: LoginWithEmailRequest
): Promise<LoginWithEmailResponse> {
  const { data, error } = await supabase.auth.signInWithPassword(args);
  if (error) {
    throw error;
  }

  return data;
}
