import { PostgrestError } from '@supabase/supabase-js';
import useSWR from 'swr';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import {
  SubjectGetRequest,
  SubjectGetResponse,
  getSubject,
} from '../../services/subject';
import { SubjectSWRKeys } from './keys';

export function useSubject(params: Partial<SubjectGetRequest>) {
  const supabase = useSupabaseClient();

  const key = params.subjectId
    ? [SubjectSWRKeys.SUBJECT, SubjectSWRKeys.GET, params.subjectId]
    : null;

  return useSWR<SubjectGetResponse, PostgrestError, string[] | null>(key, () =>
    getSubject(supabase, {
      subjectId: params.subjectId as string,
    })
  );
}
