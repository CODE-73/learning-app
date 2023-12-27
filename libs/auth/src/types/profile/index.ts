import { Database } from '@learning-app/supabase';

export type Profile = Database['public']['Tables']['Profile']['Row'];
export type ProfileUpdate = Database['public']['Tables']['Profile']['Update'];
