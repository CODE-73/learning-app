import { Course } from '../../../types/course';

export type CourseDeleteRequest = {
  courseId: string;
};
export type CourseDeleteResponse = {
  data: Course;
  count: number;
};
