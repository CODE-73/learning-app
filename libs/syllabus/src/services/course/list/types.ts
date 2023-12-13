import { Course } from 'libs/syllabus/src/types/course';
import { SortParam } from '../../types';

type CourseListSortParams = SortParam<Course>;

export type CourseListRequest = {
  filters?: CourseListFilterParams;
  sort?: CourseListSortParams;
  page?: number;
  pageSize?: number;
};

export type CourseListFilterParams = {
  q?: string;
};

export type CourseListResponse = {
  data: Course[];
  count: number;
};
