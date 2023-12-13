import { LearningAppSupabase } from '@learning-app/supabase';
import { CourseDeleteRequest, CourseDeleteResponse } from './types';

export async function deleteCourse(
  supabase: LearningAppSupabase,
  params: CourseDeleteRequest
): Promise<CourseDeleteResponse> {
  const { courseId } = params;
  const query = supabase
    .from('Course')
    .delete({ count: 'exact' })
    .eq('courseId', courseId)
    .select('*');

  const { data, error, count } = await query.single();

  if (error) {
    throw error;
  }
  return {
    count: count ?? 0,
    data,
  };
}
