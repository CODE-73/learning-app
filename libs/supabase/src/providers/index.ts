export * from './next';
import { useSupabaseClient as useSupabaseClientReact } from '@supabase/auth-helpers-react';
import { Database } from '../supabase_types';

export const useSupabaseClient = () => {
  return useSupabaseClientReact<Database>();
};
