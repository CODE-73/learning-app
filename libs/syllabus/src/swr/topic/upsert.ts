import { useSupabaseClient } from '@learning-app/supabase';
import { PostgrestError } from '@supabase/supabase-js';
import useSWRMutation from 'swr/mutation';
import { TopicSWRKeys } from './keys';
import {
  TopicUpsertRequest,
  TopicUpsertResponse,
  upsertTopic,
} from '../../services/topic';

export const useTopicUpsert = () => {
  const supabase = useSupabaseClient();

  const key = [TopicSWRKeys.TOPIC, TopicSWRKeys.UPSERT];

  return useSWRMutation<
    TopicUpsertResponse,
    PostgrestError,
    string[] | null,
    TopicUpsertRequest
  >(key, (_, { arg }) =>
    upsertTopic(supabase, { ...arg, input: { ...arg.input } })
  );
};
