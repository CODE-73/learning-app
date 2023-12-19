import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { PostgrestError } from '@supabase/supabase-js';
import useSWR from 'swr';
import {
  TopicListRequest,
  TopicListResponse,
  getTopics,
} from '../../services/topic';
import { TopicSWRKeys } from './keys';

export const useTopics = (params?: Partial<TopicListRequest>) => {
  const supabase = useSupabaseClient();

  const key = params?.subjectId
    ? [TopicSWRKeys.TOPIC, TopicSWRKeys.LIST, JSON.stringify(params)]
    : null;

  return useSWR<TopicListResponse, PostgrestError, string[] | null>(key, () =>
    getTopics(supabase, {
      ...params,
      subjectId: params?.subjectId as string,
    })
  );
};
