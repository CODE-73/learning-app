import { LearningAppSupabase } from '@learning-app/supabase';
import { SubjectListRequest, SubjectListResponse } from './types';

/**
 * Retrieves a list of subject with optional filtering and  sorting .
 *
 * @param supabase - The Supabase client instance to use for the query.
 * @param params - An object containing parameters to filter and sort the results.
 * @returns A promise that resolves to an array of partial Subject objects representing the subject.
 */

export async function getSubjects(
  supabaseClient: LearningAppSupabase,
  params: SubjectListRequest
): Promise<SubjectListResponse> {
  const { stageId, filters, sort } = params;

  let query = supabaseClient
    .from('Subject')
    .select('*', {
      count: 'exact',
    })
    .match({
      stageId,
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
