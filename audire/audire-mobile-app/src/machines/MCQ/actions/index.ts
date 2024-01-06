import {
  JumpToQuestionEvent,
  NextQuestionEvent,
  PrevQuestionEvent,
  MarkAnswerEvent,
  MarkToRevisitEvent,
  StartExamEvent,
  SubmitExamEvent,
} from '../events/machine';
import { MCQMachineContext } from '../types/context';
import { MarkAnswer, MarkToRevisit } from '../types/context';

export function setCurrentQuestion(
  context: MCQMachineContext,
  event: JumpToQuestionEvent
): MCQMachineContext {
  return {
    ...context,
    currentQuestionIdx: event.questionIdx,
  };
}

export function setNextQuestion(
  context: MCQMachineContext,
  event: NextQuestionEvent
): MCQMachineContext {
  return {
    ...context,
    currentQuestionIdx: context.currentQuestionIdx + 1,
  };
}

export function setPrevQuestion(
  context: MCQMachineContext,
  event: PrevQuestionEvent
): MCQMachineContext {
  return {
    ...context,
    currentQuestionIdx: context.currentQuestionIdx - 1,
  };
}

export function setMarkAnswer(
  context: MCQMachineContext,
  event: MarkAnswerEvent
): MCQMachineContext {
  const updatedMarkAnswer: MarkAnswer = {
    ...context.markAnswer,
    [context.currentQuestionIdx]: event.selectedOption,
  };

  return {
    ...context,
    markAnswer: updatedMarkAnswer,
  };
}

export function setMarkToRevisit(
  context: MCQMachineContext,
  event: MarkToRevisitEvent
): MCQMachineContext {
  const updatedMarkToRevisit: MarkToRevisit = {
    ...context.markToRevisit,
    [event.questionIdx]: event.markedForRevisit,
  };

  return {
    ...context,
    currentQuestionIdx: event.questionIdx,
    markToRevisit: updatedMarkToRevisit,
  };
}

export function setStartExam(
  context: MCQMachineContext,
  event: StartExamEvent
): MCQMachineContext {
  return {
    ...context,
    currentQuestionIdx: 0,
    questions: event.questions,
  };
}

export function setSubmitExam(
  context: MCQMachineContext,
  event: SubmitExamEvent
): MCQMachineContext {
  return {
    ...context,
  };
}
