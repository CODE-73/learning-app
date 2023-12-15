import { LearningAppSupabase } from '@learning-app/supabase';
import { TopicDeleteRequest, TopicDeleteResponse } from './types';

export async function deleteTopic(
  supabase: LearningAppSupabase,
  params: TopicDeleteRequest
): Promise<TopicDeleteResponse> {
  const { topicId } = params;
  const query = supabase
    .from('Topic')
    .delete({ count: 'exact' })
    .eq('topicId', topicId)
    .select('*');

  const { data, error, count } = await query.single();

  if (error) {
    throw error;
  }
  return {
    count: count ?? 0,
    data: data as TopicDeleteResponse['data'],
  };
}
