import { z } from 'zod';

const MCQQuestionSchema = z.object({
  id: z.string().optional(),
  question: z.string(),
  options: z.array(z.string()).default(['', '', '', '']),
  correctOption: z.number().default(0),
  explanation: z.string().default(''),
});

export const TopicFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  subjectId: z.string().min(1),
  mcqQuestions: z.array(MCQQuestionSchema),
});

export type TopicForm = z.infer<typeof TopicFormSchema>;
