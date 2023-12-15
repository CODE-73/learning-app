import { Database } from '@learning-app/supabase';

export type Course = Database['public']['Tables']['Course']['Row'];
export type CourseUpdate = Database['public']['Tables']['Course']['Update'];
export type CourseInsert = Database['public']['Tables']['Course']['Insert'];

export type CourseUpsert = CourseUpdate | CourseInsert;

// Stages
export type Stage = Database['public']['Tables']['Stage']['Row'];
export type CourseWithStages = Course & { stages: Stage[] };
