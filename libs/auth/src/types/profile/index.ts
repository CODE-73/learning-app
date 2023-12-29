import { Database } from '@learning-app/supabase';
import { CourseWithStages } from '@learning-app/syllabus';

export type Profile = Database['public']['Tables']['Profile']['Row'];
export type ProfileUpdate = Database['public']['Tables']['Profile']['Update'];

export type ProfileExtended = Pick<
  Profile,
  'id' | 'firstName' | 'lastName' | 'mobile'
> & {
  optedCourse: CourseWithStages | null;
};
