import { LearningAppSupabase } from '@learning-app/supabase';
import { TopicGetRequest, TopicGetResponse } from './types';

/**
 * Retrieves a single topic by ID.
 *
 * @param supabase - The Supabase client instance to use fot the query.
 * @param params - An object specifying the topic ID to retrieve.
 * @returns A promise that resolves to an Topic object
 */

export async function getTopic(
  supabase: LearningAppSupabase,
  params: TopicGetRequest
): Promise<TopicGetResponse> {
  const { data, error } = await supabase
    .from('Topic')
    .select('*, mcqQuestions:McqQuestion(*)')
    .match({ id: params.topicId })
    .single();

  if (error) {
    throw error;
  }

  return data;
}
