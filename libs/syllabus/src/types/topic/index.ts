import { Database } from '@learning-app/supabase';
export * from './mcqQuestions';

export type Topic = Database['public']['Tables']['Topic']['Row'];
export type TopicUpdate = Database['public']['Tables']['Topic']['Update'];
export type TopicInsert = Database['public']['Tables']['Topic']['Insert'];

export type TopicUpsert = TopicUpdate | TopicInsert;
