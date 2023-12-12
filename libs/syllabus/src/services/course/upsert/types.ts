import { Course, CourseUpsert } from 'libs/syllabus/src/types/course';

export type CourseUpsertRequest = {
  input: CourseUpsert;
};
export type CourseUpsertResponse = Course;
