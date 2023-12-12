import { Course } from 'libs/syllabus/src/types/course';

export type CourseGetRequest = {
  courseId: string;
};

export type CourseGetResponse = Course;
