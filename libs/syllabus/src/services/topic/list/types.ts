import { TopicWithNumQuestions } from '../../../types';
import { SortParam } from '../../types';

type TopicListSortParams = SortParam<TopicWithNumQuestions>;

export type TopicListRequest = {
  subjectId: string;
  filters?: TopicListFilterParams;
  sort?: TopicListSortParams;
  page?: number;
  pageSize?: number;
};

export type TopicListFilterParams = {
  q?: string;
  enabled?: boolean;
};

export type TopicListResponse = {
  data: TopicWithNumQuestions[];
  count: number;
};
