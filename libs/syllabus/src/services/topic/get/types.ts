import { Topic, McqQuestion } from '../../../types';

export type TopicGetRequest = {
  topicId: string;
};

export type TopicGetResponse = Topic & {
  mcqQuestions: McqQuestion[];
};
