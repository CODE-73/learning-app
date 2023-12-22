import { createClient } from 'supabase';
import { type Database } from './database_type.ts'

export const createSupabaseAdminClient = () => {
  return createClient<Database>(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    {
      auth: {
        persistSession: false,
      },
    }
  );
};

export const createSupabaseClient = (req: Request) => {
    return createClient<Database>(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          headers: { Authorization: req.headers.get('Authorization')! },
        },
        auth: {
          persistSession: false,
        },
      }
    );
  };
  