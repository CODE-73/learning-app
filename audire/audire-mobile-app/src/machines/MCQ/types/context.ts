import { ProfileExtended } from '@learning-app/auth';
import { McqQuestion } from '@learning-app/syllabus';


export type MarkAnswer = {
  [questionId: string]: number;
};

export type MarkToRevisit = {
  [questionId: string]: boolean;
};

export type MCQMachineContext = {
  profile: ProfileExtended;
  questions: McqQuestion[];
  currentQuestionIdx: number;
  markAnswer: MarkAnswer;
  markToRevisit: MarkToRevisit;
};
