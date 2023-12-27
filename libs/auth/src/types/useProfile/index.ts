import { Database } from '@learning-app/supabase';

export type Profile = Database['public']['Tables']['Profile']['Row'];

export type ProfileExtended = Pick<
  Profile,
  'id' | 'firstName' | 'lastName' | 'mobile'
>;
