import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { PostgrestError } from '@supabase/supabase-js';
import useSWRImmutable from 'swr/immutable';
import {
  SubjectListRequest,
  SubjectListResponse,
  getSubjects,
} from '../../services/subject';
import { SubjectSWRKeys } from './keys';

export const useSubjects = (params?: Partial<SubjectListRequest>) => {
  const supabase = useSupabaseClient();

  const key =
    params?.courseId && params?.stageId
      ? [SubjectSWRKeys.SUBJECT, SubjectSWRKeys.LIST, JSON.stringify(params)]
      : null;

  return useSWRImmutable<SubjectListResponse, PostgrestError, string[] | null>(
    key,
    () =>
      getSubjects(supabase, {
        ...params,
        courseId: params?.courseId as string,
        stageId: params?.stageId as string,
      })
  );
};
