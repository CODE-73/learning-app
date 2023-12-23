import { PostgrestError } from '@supabase/supabase-js';
import useSWR from 'swr';
import { useSupabaseClient } from '@learning-app/supabase';
import {
  CourseGetRequest,
  CourseGetResponse,
  getCourse,
} from '../../services/course/get';
import { CourseSWRKeys } from './keys';

export function useCourse(
  params: Partial<CourseGetRequest> & { courseId: string }
) {
  const supabase = useSupabaseClient();

  const key = params.courseId
    ? [CourseSWRKeys.COURSE, CourseSWRKeys.GET, params.courseId]
    : null;

  return useSWR<CourseGetResponse, PostgrestError, string[] | null>(key, () =>
    getCourse(supabase, params)
  );
}
