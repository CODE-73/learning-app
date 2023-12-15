import { Subject } from '../../../types';
import { SortParam } from '../../types';

type SubjectListSortParams = SortParam<Subject>;

export type SubjectListRequest = {
  courseId: string;
  stageId: string;
  filters?: SubjectListFilterParams;
  sort?: SubjectListSortParams;
  page?: number;
  pageSize?: number;
};

export type SubjectListFilterParams = {
  q?: string;
};

export type SubjectListResponse = {
  data: Subject[];
  count: number;
};
