import { PostgrestError } from '@supabase/supabase-js';
import useSWRMutation from 'swr/mutation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import {
  SubjectGetRequest,
  SubjectGetResponse,
  getSubject,
} from '../../services/subject/get';
import { SubjectSWRKeys } from './keys';

export function useSubject(
  params: Partial<SubjectGetRequest> & { subjectId: string }
) {
  const supabase = useSupabaseClient();

  const key = params.subjectId
    ? [SubjectSWRKeys.SUBJECT, SubjectSWRKeys.GET, params.subjectId]
    : null;

  return useSWRMutation<SubjectGetResponse, PostgrestError, string[] | null>(
    key,
    () => getSubject(supabase, params)
  );
}
