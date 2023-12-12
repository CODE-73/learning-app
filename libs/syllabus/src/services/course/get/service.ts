import { LearningAppSupabase } from '@learning-app/supabase';
import { CourseGetRequest, CourseGetResponse } from './types';

/**
 * Retrieves a single course by ID.
 *
 * @param supabase - The Supabase client instance to use fot the query.
 * @param params - An object specifying the course ID to retrieve.
 * @returns A promise that resolves to an Course object
 */

export async function getCourse(
  supabase: LearningAppSupabase,
  params: CourseGetRequest
): Promise<CourseGetResponse> {
  const { data, error } = await supabase
    .from('Course')
    .select('*')
    .match({
      id: params.courseId,
    })
    .single();

  if (error) {
    throw error;
  }

  return data;
}
