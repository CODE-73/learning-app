import { Course, CourseUpsert } from '../../../types';

export type CourseUpsertRequest = {
  input: CourseUpsert;
};
export type CourseUpsertResponse = Course;
