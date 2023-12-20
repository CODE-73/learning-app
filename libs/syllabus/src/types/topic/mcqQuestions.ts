import { Database } from '@learning-app/supabase';

export type McqQuestion = Database['public']['Tables']['McqQuestion']['Row'];
export type McqQuestionUpdate = Database['public']['Tables']['McqQuestion']['Update'];
export type McqQuestionInsert = Database['public']['Tables']['McqQuestion']['Insert'];

export type McqQuestionUpsert = McqQuestionUpdate | McqQuestionInsert;
