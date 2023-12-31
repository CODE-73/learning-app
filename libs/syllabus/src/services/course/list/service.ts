import { LearningAppSupabase } from '@learning-app/supabase';
import { CourseListRequest, CourseListResponse } from './types';

/**
 * Retrieves a list of course with optional filtering and  sorting .
 *
 * @param supabase - The Supabase client instance to use for the query.
 * @param params - An object containing parameters to filter and sort the results.
 * @returns A promise that resolves to an array of partial Course objects representing the course.
 */

export async function getCourses(
  supabaseClient: LearningAppSupabase,
  params: CourseListRequest
): Promise<CourseListResponse> {
  const { filters, sort } = params;

  let query = supabaseClient.from('Course').select('*,stages:Stage(*)', {
    count: 'exact',
  });

  if (filters?.q) {
    query = query.or(
      `title.ilike.*${filters.q}*, title_ar.ilike.*${filters.q}*`
    );
  }

  if (sort) {
    query = query.order(sort.field, { ascending: sort.ascending });
  } else {
    query = query.order('createdAt', { ascending: false });
  }

  const { data, error, count } = await query;

  if (error) {
    throw error;
  }

  return { data, count: count ?? 0 };
}
