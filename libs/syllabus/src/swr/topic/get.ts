import { PostgrestError } from '@supabase/supabase-js';
import useSWRMutation from 'swr/mutation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import {
  TopicGetRequest,
  TopicGetResponse,
  getTopic,
} from '../../services/topic';
import { TopicSWRKeys } from './keys';

export function useTopic(
  params: Partial<TopicGetRequest> & { topicId: string }
) {
  const supabase = useSupabaseClient();

  const key = params.topicId
    ? [TopicSWRKeys.TOPIC, TopicSWRKeys.GET, params.topicId]
    : null;

  return useSWRMutation<TopicGetResponse, PostgrestError, string[] | null>(
    key,
    () => getTopic(supabase, params)
  );
}
