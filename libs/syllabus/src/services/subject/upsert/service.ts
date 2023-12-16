import { SubjectInsert } from '../../../types';
import { SubjectUpsertRequest, SubjectUpsertResponse } from './types';
import { LearningAppSupabase } from '@learning-app/supabase';

/**
 * Creates/updates an Subject. For update to occur, the id of the subject must be provided.
 *
 * @param supabase - The Supabase client instance
 * @param params - The subject to upsert
 * @returns The upserted subject
 */

export async function upsertSubject(
  supabase: LearningAppSupabase,
  params: SubjectUpsertRequest
): Promise<SubjectUpsertResponse> {
  const { input: subject } = params;

  let query = supabase
    .from('Subject')
    .insert(subject as SubjectInsert)
    .select('*');

  if (subject.id) {
    //update
    query = supabase
      .from('Subject')
      .update(subject)
      .match({ id: subject.id })
      .select('*');
  }

  const { data, error } = await query.single();

  if (error) {
    throw error;
  }

  return data;
}
