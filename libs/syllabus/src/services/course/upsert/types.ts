import { Course, CourseUpsert } from '../../../types/course';

export type CourseUpsertRequest = {
  input: CourseUpsert;
};
export type CourseUpsertResponse = Course;
