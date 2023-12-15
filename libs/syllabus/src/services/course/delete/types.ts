import { Course } from '../../../types';

export type CourseDeleteRequest = {
  courseId: string;
};
export type CourseDeleteResponse = {
  data: Course;
  count: number;
};
