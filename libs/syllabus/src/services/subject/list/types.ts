import { Subject } from '../../../types';
import { SortParam } from '../../types';

type SubjectListSortParams = SortParam<Subject>;

export type SubjectListRequest = {
  stageId: string;
  filters?: SubjectListFilterParams;
  sort?: SubjectListSortParams;
  page?: number;
  pageSize?: number;
};

export type SubjectListFilterParams = {
  q?: string;
  enabled?: boolean;
};

export type SubjectListResponse = {
  data: Subject[];
  count: number;
};
