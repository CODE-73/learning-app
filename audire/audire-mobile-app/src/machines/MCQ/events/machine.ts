import { McqQuestion } from '../../../../../../libs/syllabus/src/types';

export type StartExamEvent = {
  type: 'START_EXAM';
  questions: McqQuestion[];
};

export type JumpToQuestionEvent = {
  type: 'JUMP_TO_QUESTION';
  questionIdx: number;
};

export type MarkAnswerEvent = {
  type: 'MARK_ANSWER';
  selectedOption: number;
};

export type PrevQuestionEvent = {
  type: 'PREV_QUESTION';
};

export type NextQuestionEvent = {
  type: 'NEXT_QUESTION';
};

export type MarkToRevisitEvent = {
  type: 'MARK_TO_REVISIT';
  markToRevisit: boolean;
};

export type SubmitExamEvent = {
  type: 'SUBMIT_EXAM';
};
