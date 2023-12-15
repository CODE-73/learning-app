import { Course } from '../../../types/course';

export type CourseGetRequest = {
  courseId: string;
};

export type CourseGetResponse = Course;
