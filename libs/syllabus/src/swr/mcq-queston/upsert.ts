import { useSupabaseClient } from '@learning-app/supabase';
import { PostgrestError } from '@supabase/supabase-js';
import useSWRMutation from 'swr/mutation';
import { McqQuestionSWRKeys } from './keys';
import {
  McqQuestionUpsertRequest,
  McqQuestionUpsertResponse,
  upsertMcqQuestion,
} from '../../services/mcq-question';
import { useClearCacheOnSuccess } from '@learning-app/utils';

export const useMCQQuestionUpsert = () => {
  const supabase = useSupabaseClient();

  const key = [McqQuestionSWRKeys.MCQQUESTION, McqQuestionSWRKeys.UPSERT];

  return useSWRMutation<
    McqQuestionUpsertResponse,
    PostgrestError,
    string[] | null,
    McqQuestionUpsertRequest
  >(
    key,
    (_, { arg }) =>
      upsertMcqQuestion(supabase, {
        prevMCQs: arg.prevMCQs,
        newMCQs: arg.newMCQs,
      }),
    {
      ...useClearCacheOnSuccess(McqQuestionSWRKeys.MCQQUESTION),
    }
  );
};

