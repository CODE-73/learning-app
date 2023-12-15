import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { PostgrestError } from '@supabase/supabase-js';
import useSWRImmutable from 'swr/immutable';
import {
  TopicListRequest,
  TopicListResponse,
  getTopics,
} from '../../services/topic';
import { TopicSWRKeys } from './keys';

export function useTopics(params?: Partial<TopicListRequest>) {
  const supabase = useSupabaseClient();

  const key =
    params?.stageId && params?.TopicId
      ? [TopicSWRKeys.TOPIC, TopicSWRKeys.LIST, JSON.stringify(params)]
      : null;

  return useSWRImmutable<TopicListResponse, PostgrestError, string[] | null>(
    key,
    () =>
      getTopics(supabase, {
        ...params,
        stageId: params?.stageId as string,
        TopicId: params?.TopicId as string,
      })
  );
}
