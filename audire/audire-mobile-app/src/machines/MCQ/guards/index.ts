import { MCQMachineContext } from '../types/context';
// import { PrevQuestionEvent, NextQuestionEvent } from '../events';

export function hasNextQuestion({
  context,
}: {
  context: MCQMachineContext;
}): boolean {
  const { questions, currentQuestionIdx } = context;
  return currentQuestionIdx < questions.length - 1;
}

export function hasPrevQuestion({
  context,
}: {
  context: MCQMachineContext;
}): boolean {
  const { questions, currentQuestionIdx } = context;
  return currentQuestionIdx > 0;
}

// mcqquestion - 1 = guard = false
