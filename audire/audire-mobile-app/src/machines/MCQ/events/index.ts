import {
  StartExamEvent,
  JumpToQuestionEvent,
  MarkAnswerEvent,
  PrevQuestionEvent,
  NextQuestionEvent,
  MarkToRevisitEvent,
  SubmitExamEvent,
} from './machine';

export * from './machine';

export type MCQMachineEvents =
  //Machine Events
  | StartExamEvent
  | JumpToQuestionEvent
  | MarkAnswerEvent
  | PrevQuestionEvent
  | NextQuestionEvent
  | MarkToRevisitEvent
  | SubmitExamEvent;
