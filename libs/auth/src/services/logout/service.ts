import { SupabaseClient } from '@supabase/supabase-js';
import { LogoutResponse } from './types';

export async function logout(
  supabase: SupabaseClient
): Promise<LogoutResponse> {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }

  return true;
}
