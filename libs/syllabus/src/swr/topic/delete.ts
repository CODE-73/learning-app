import { PostgrestError } from '@supabase/supabase-js';
import { useSupabaseClient } from '@learning-app/supabase';
import { TopicSWRKeys } from './keys';
import useSWRMutation from 'swr/mutation';
import { TopicDeleteRequest, TopicDeleteResponse } from '../../services/topic';
import { deleteTopic } from '../../services/topic';

export async function useTopicDelete(params: TopicDeleteRequest) {
  const supabase = useSupabaseClient();

  const key = params.topicId
    ? [TopicSWRKeys.TOPIC, TopicSWRKeys.DELETE, params.topicId]
    : null;

  return useSWRMutation<
    TopicDeleteResponse,
    PostgrestError,
    string[] | null,
    TopicDeleteRequest
  >(key, (_, { arg }) =>
    deleteTopic(supabase, {
      ...arg,
      topicId: params.topicId as string,
    })
  );
}
