import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { PostgrestError } from '@supabase/supabase-js';
import useSWR from 'swr';
import {
  SubjectListRequest,
  SubjectListResponse,
  getSubjects,
} from '../../services/subject';
import { SubjectSWRKeys } from './keys';

export const useSubjects = (params?: Partial<SubjectListRequest>) => {
  const supabase = useSupabaseClient();

  const key = params?.stageId
    ? [SubjectSWRKeys.SUBJECT, SubjectSWRKeys.LIST, JSON.stringify(params)]
    : null;

  return useSWR<SubjectListResponse, PostgrestError, string[] | null>(key, () =>
    getSubjects(supabase, {
      ...params,
      stageId: params?.stageId as string,
    })
  );
};
