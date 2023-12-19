import { PostgrestError } from '@supabase/supabase-js';
import { useSupabaseClient } from '@learning-app/supabase';
import { TopicSWRKeys } from './keys';
import useSWRMutation from 'swr/mutation';
import { TopicDeleteRequest, TopicDeleteResponse } from '../../services/topic';
import { deleteTopic } from '../../services/topic';
import { useClearCacheOnSuccess } from '@learning-app/utils';

export function useTopicDelete() {
  const supabase = useSupabaseClient();

  const key = [TopicSWRKeys.TOPIC, TopicSWRKeys.DELETE];

  return useSWRMutation<
    TopicDeleteResponse,
    PostgrestError,
    string[] | null,
    TopicDeleteRequest
  >(
    key,
    (_, { arg }) =>
      deleteTopic(supabase, {
        ...arg,
      }),
    {
      ...useClearCacheOnSuccess(TopicSWRKeys.TOPIC),
    }
  );
}
