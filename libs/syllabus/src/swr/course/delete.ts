import { PostgrestError } from '@supabase/supabase-js';
import { useSupabaseClient } from '@learning-app/supabase';
import { CourseSWRKeys } from './keys';
import useSWRMutation from 'swr/mutation';
import {
  CourseDeleteRequest,
  CourseDeleteResponse,
} from '../../services/course/delete/types';
import { deleteCourse } from '../../services/course/delete/service';

export async function useCourseDelete(params: CourseDeleteRequest) {
  const supabase = useSupabaseClient();

  const key = params.courseId
    ? [CourseSWRKeys.COURSE, CourseSWRKeys.GET, params.courseId]
    : null;

  return useSWRMutation<
    CourseDeleteResponse,
    PostgrestError,
    string[] | null,
    CourseDeleteRequest
  >(key, (_, { arg }) =>
    deleteCourse(supabase, {
      ...arg,
      courseId: params.courseId as string,
    })
  );
}
