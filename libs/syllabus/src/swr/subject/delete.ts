import { PostgrestError } from '@supabase/supabase-js';
import { useSupabaseClient } from '@learning-app/supabase';
import { SubjectSWRKeys } from './keys';
import useSWRMutation from 'swr/mutation';
import {
  SubjectDeleteRequest,
  SubjectDeleteResponse,
} from '../../services/subject/delete/types';

import { deleteSubject } from '../../services/subject/delete/service';

export async function useSubjectDelete(params: SubjectDeleteRequest) {
  const supabase = useSupabaseClient();

  const key = params.subjectId
    ? [SubjectSWRKeys.SUBJECT, SubjectSWRKeys.GET, params.subjectId]
    : null;

  return useSWRMutation<
    SubjectDeleteResponse,
    PostgrestError,
    string[] | null,
    SubjectDeleteRequest
  >(key, (_, { arg }) =>
    deleteSubject(supabase, {
      ...arg,
      subjectId: params.subjectId as string,
    })
  );
}
