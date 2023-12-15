import { Topic } from '../../../types';

export type TopicDeleteRequest = {
  topicId: string;
};
export type TopicDeleteResponse = {
  data: Topic;
  count: number;
};
