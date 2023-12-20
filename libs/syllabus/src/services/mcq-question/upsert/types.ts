import { McqQuestion, McqQuestionUpsert } from '../../../types';

export type McqQuestionUpsertRequest = {
  prevMCQs: McqQuestion[];
  newMCQs: McqQuestionUpsert[];
};

export type McqQuestionUpsertResponse = McqQuestion[];
