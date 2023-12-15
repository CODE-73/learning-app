import { LearningAppSupabase } from '@learning-app/supabase';
import { SubjectGetRequest, SubjectGetResponse } from './types';

/**
 * Retrieves a single subject by ID.
 *
 * @param supabase - The Supabase client instance to use fot the query.
 * @param params - An object specifying the subject ID to retrieve.
 * @returns A promise that resolves to an Subject object
 */

export async function getSubject(
  supabase: LearningAppSupabase,
  params: SubjectGetRequest
): Promise<SubjectGetResponse> {
  const { data, error } = await supabase
    .from('Subject')
    .select('*')
    .match({ id: params.subjectId })
    .single();

  if (error) {
    throw error;
  }

  return data;
}
