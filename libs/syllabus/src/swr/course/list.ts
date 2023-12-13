import { useSupabaseClient } from '@learning-app/supabase';
import { PostgrestError } from '@supabase/supabase-js';
import useSWRImmutable from 'swr/immutable';
import {
  CourseListRequest,
  CourseListResponse,
  getCourses,
} from '../../services/course/list';
import { CourseSWRKeys } from './keys';

export const useCourses = (params?: Partial<CourseListRequest>) => {
  const supabase = useSupabaseClient();

  const key = params?.courseId
    ? [
        CourseSWRKeys.COURSE,
        CourseSWRKeys.LIST,
        params.courseId,
        JSON.stringify(params),
      ]
    : null;

  return useSWRImmutable<CourseListResponse, PostgrestError, string[] | null>(
    key,
    () =>
      getCourses(supabase, { ...params, courseId: params?.courseId as string })
  );
};
