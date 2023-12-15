import { TopicInsert } from '../../../types';
import { TopicUpsertRequest, TopicUpsertResponse } from './types';
import { LearningAppSupabase } from '@learning-app/supabase';

/**
 * Creates/updates an Topic. For update to occur, the id of the topic must be provided.
 *
 * @param supabase - The Supabase client instance
 * @param params - The topic to upsert
 * @returns The upserted topic
 */

export async function upsertTopic(
  supabase: LearningAppSupabase,
  params: TopicUpsertRequest
): Promise<TopicUpsertResponse> {
  const { input: topic } = params;

  let query = supabase
    .from('Topic')
    .insert(topic as TopicInsert)
    .select('*');

  if (topic.id) {
    //update
    query = supabase
      .from('Topic')
      .update(topic)
      .match({ id: topic.id })
      .select('*');
  }

  const { data, error } = await query.single();

  if (error) {
    throw error;
  }

  return data;
}
