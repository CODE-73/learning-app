import {
  JumpToQuestionEvent,
  MarkAnswerEvent,
  MarkToRevisitEvent,
  NextQuestionEvent,
  PrevQuestionEvent,
  StartExamEvent,
} from '../events/machine';
import { MCQMachineContext, MarkAnswer } from '../types/context';

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
  const markToRevisit = context.markToRevisit ?? {};
  markToRevisit[context.currentQuestionIdx] = event.markToRevisit;

  const numMarkedToRevisit = Object.entries(markToRevisit).filter(
    (k) => k[1] === true
  ).length;

  return {
    ...context,
    markToRevisit: {
      ...markToRevisit,
    },
    noOfQuestionToRevisit: numMarkedToRevisit,
  };
}

export function setStartExam(
  context: MCQMachineContext,
  event: StartExamEvent
): MCQMachineContext {
  return {
    ...context,
    currentQuestionIdx: 0,
    markAnswer: {},
    markToRevisit: {},
    questions: event.questions,
    markObtained: 0,
    maxMark: 0,
    numCorrectAnswers: 0,
    numUnattended: 0,
    numWrongAnswers: 0,
    visited: {},
  };
}

export function calculateMarks(context: MCQMachineContext): MCQMachineContext {
  let numCorrect = 0,
    numWrong = 0,
    numUnattended = 0;
  const score = context.questions.reduce((mark, question, idx) => {
    if (context.markAnswer[idx] >= 0) {
      if (context.markAnswer[idx] === question.correctOption) {
        mark += 4;
        numCorrect += 1;
      } else {
        mark -= 1;
        numWrong += 1;
      }
    } else {
      numUnattended += 1;
    }
    return mark;
  }, 0);

  return {
    ...context,
    markObtained: score,
    maxMark: context.questions.length * 4,
    numCorrectAnswers: numCorrect,
    numWrongAnswers: numWrong,
    numUnattended: numUnattended,
  };
}

export function markQuestionVisited(
  context: MCQMachineContext
): MCQMachineContext {
  return {
    ...context,
    visited: {
      ...context.visited,

      [context.currentQuestionIdx]: true,
    },
  };
}
