import { useSupabaseClient } from '@learning-app/supabase';
import { SubjectSWRKeys } from './keys';
import useSWRMutation from 'swr/mutation';

import {
  SubjectUpsertRequest,
  SubjectUpsertResponse,
  upsertSubject,
} from '../../services/subject/upsert';
import { useClearCacheOnSuccess } from '@learning-app/utils';
import { PostgrestError } from '@supabase/supabase-js';

export const useSubjectUpsert = () => {
  const supabase = useSupabaseClient();

  const key = [SubjectSWRKeys.SUBJECT, SubjectSWRKeys.UPSERT];

  return useSWRMutation<
    SubjectUpsertResponse,
    PostgrestError,
    string[] | null,
    SubjectUpsertRequest
  >(
    key,
    (_, { arg }) =>
      upsertSubject(supabase, { ...arg, input: { ...arg.input } }),
    {
      ...useClearCacheOnSuccess(SubjectSWRKeys.SUBJECT),
    }
  );
};
