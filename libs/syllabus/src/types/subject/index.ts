import { Database } from '@learning-app/supabase';

export type Subject = Database['public']['Tables']['Subject']['Row'];
export type SubjectUpdate = Database['public']['Tables']['Subject']['Update'];
export type SubjectInsert = Database['public']['Tables']['Subject']['Insert'];

export type SubjectUpsert = SubjectUpdate | SubjectInsert;
