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
  noOfQuestionToRevisit: number;

  // On Submit the following are filled
  markObtained: number;
  maxMark: number;
  numCorrectAnswers: number;
  numWrongAnswers: number;
  numUnattended: number;
};
