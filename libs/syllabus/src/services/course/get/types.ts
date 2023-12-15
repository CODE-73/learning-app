import { Course } from '../../../types';

export type CourseGetRequest = {
  courseId: string;
};

export type CourseGetResponse = Course;
