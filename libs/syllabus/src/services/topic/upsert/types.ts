import { Topic, TopicUpsert } from '../../../types';

export type TopicUpsertRequest = {
  input: TopicUpsert;
};

export type TopicUpsertResponse = Topic;
