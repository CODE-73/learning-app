import { CourseInsert } from '../../../types';
import { LearningAppSupabase } from '@learning-app/supabase';
import { CourseUpsertRequest, CourseUpsertResponse } from './types';

/**
 * Creates/updates an Course. For update to occur, the id of the course must be provided.
 *
 * @param supabase - The Supabase client instance
 * @param params - The course to upsert
 * @returns The upserted course
 */

export async function upsertCourse(
  supabase: LearningAppSupabase,
  params: CourseUpsertRequest
): Promise<CourseUpsertResponse> {
  const { input: course } = params;

  let query = supabase
    .from('Course')
    .insert(course as CourseInsert)
    .select('*');

  if (course.id) {
    //update
    query = supabase
      .from('Course')
      .update(course)
      .match({ id: course.id })
      .select('*');
  }
  const { data, error } = await query.single();

  if (error) {
    throw error;
  }

  return data;
}
