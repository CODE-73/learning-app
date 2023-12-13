import { Course } from 'libs/syllabus/src/types/course';

export type CourseDeleteRequest = {
  courseId: string;
};
export type CourseDeleteResponse = {
  data: Course;
  count: number;
};
