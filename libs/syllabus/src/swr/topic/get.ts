import { PostgrestError } from '@supabase/supabase-js';
import useSWR from 'swr';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import {
  TopicGetRequest,
  TopicGetResponse,
  getTopic,
} from '../../services/topic';
import { TopicSWRKeys } from './keys';

export function useTopic(params: Partial<TopicGetRequest>) {
  const supabase = useSupabaseClient();

  const key = params.topicId
    ? [TopicSWRKeys.TOPIC, TopicSWRKeys.GET, params.topicId]
    : null;

  return useSWR<TopicGetResponse, PostgrestError, string[] | null>(key, () =>
    getTopic(supabase, { topicId: params.topicId as string })
  );
}
