import { CourseWithStages } from '../../../types';
import { SortParam } from '../../types';

type CourseListSortParams = SortParam<CourseWithStages>;

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
  data: CourseWithStages[];
  count: number;
};
