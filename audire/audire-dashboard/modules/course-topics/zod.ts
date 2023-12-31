import { z } from 'zod';

const MCQQuestionSchema = z.object({
  id: z.string().optional(),
  question: z.string(),
  options: z.array(z.string()).default(['', '', '', '']),
  correctOption: z.number().default(0),
  explanation: z.string().default(''),
});

const FileUploadKey = z.string().optional().transform((val) => {
  if (typeof val === 'string' && val.length > 0) {
    return val;
  }
  return null;
})

export const TopicFormSchema = z.object({
  title: z.string(),
  enabled: z.boolean().default(true),
  description: z.string(),
  subjectId: z.string().min(1),
  mcqQuestions: z.array(MCQQuestionSchema),
  studyMaterial: FileUploadKey,
  videoLink: FileUploadKey,
});

export type TopicForm = z.infer<typeof TopicFormSchema>;
