import { Database } from '@learning-app/supabase';

export type Subject = Database['public']['Tables']['Subject']['Row'];
