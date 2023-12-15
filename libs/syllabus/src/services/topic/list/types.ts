import { Topic } from '../../../types';
import { SortParam } from '../../types';

type TopicListSortParams = SortParam<Topic>;

export type TopicListRequest = {
  stageId: string;
  TopicId: string;
  filters?: TopicListFilterParams;
  sort?: TopicListSortParams;
  page?: number;
  pageSize?: number;
};

export type TopicListFilterParams = {
  q?: string;
};

export type TopicListResponse = {
  data: Topic[];
  count: number;
};
