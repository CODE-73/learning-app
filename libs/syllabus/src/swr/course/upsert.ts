import { useSupabaseClient } from '@learning-app/supabase';
import { CourseSWRKeys } from './keys';
import useSWRMutation from 'swr/mutation';

import {
  CourseUpsertRequest,
  CourseUpsertResponse,
  upsertCourse,
} from '../../services/course';
import { PostgrestError } from '@supabase/supabase-js';

export const useCourseUpsert = () => {
  const supabase = useSupabaseClient();

  const key = [CourseSWRKeys.COURSE, CourseSWRKeys.UPSERT];

  return useSWRMutation<
    CourseUpsertResponse,
    PostgrestError,
    string[] | null,
    CourseUpsertRequest
  >(key, (_, { arg }) =>
    upsertCourse(supabase, {
      ...arg,
      input: {
        ...arg.input,
      },
    })
  );
};
