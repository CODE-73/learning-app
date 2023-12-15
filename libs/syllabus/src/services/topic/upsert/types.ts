import { Topic, TopicUpsert } from 'libs/syllabus/src/types';

export type TopicUpsertRequest = {
  input: TopicUpsert;
};

export type TopicUpsertResponse = Topic;
