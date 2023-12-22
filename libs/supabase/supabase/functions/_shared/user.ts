import { SupabaseClient } from 'supabase';
import { createHash } from 'https://deno.land/std@0.110.0/node/crypto.ts';
import { Database } from './database_type.ts';

export async function checkUserExists(
  supabaseAdmin: SupabaseClient<Database>,
  mobile: string
): Promise<boolean> {
  const { data, error } = await supabaseAdmin.rpc('check_mobile_exists', {
    mobile,
  });

  if (error) {
    return false;
  }

  return data ?? false;
}

export function getUserPassword(mobile: string) {
  const salt = Deno.env.get('PASSWORD_SECRET');
  if (!salt) {
    throw new Error('PASSWORD_SECRET is not set');
  }

  const hash = createHash('sha256')
    .update(mobile)
    .update(salt)
    .digest('hex')
    .toString();

  return hash.slice(0, 24);
}
