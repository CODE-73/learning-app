import { zodResolver } from '@hookform/resolvers/zod';
import { Subject, useSubject, useSubjectUpsert } from '@learning-app/syllabus';
import { Button, Input } from '@nextui-org/react';
import CourseStageSelector from 'components/CourseStageSelector';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface SubjectFormProps {
  isNew?: boolean;
  subjectId?: string;
  stageId?: string;
  onComplete?: (subject: Subject) => void;
  onCancel?: () => void;
}

const SubjectFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  stageId: z.string().min(1),
});

type SubjectForm = z.infer<typeof SubjectFormSchema>;

const SubjectForm: FC<SubjectFormProps> = ({
  isNew,
  subjectId,
  stageId,
  onComplete,
  onCancel,
}) => {
  const { data: subject } = useSubject({ subjectId });
  const { trigger, isMutating } = useSubjectUpsert();

  const form = useForm<SubjectForm>({
    mode: 'onBlur',
    defaultValues: {
      stageId,
    },
    resolver: zodResolver(SubjectFormSchema),
  });

  useEffect(() => {
    if (isNew || !subject) {
      return;
    }

    // Load the form with the values of useSubject
    form.reset({
      title: subject.title,
      description: subject.description,
      stageId: subject.stageId,
    });
  }, [form, isNew, subject]);

  const upsertSubject = async (data: SubjectForm) => {
    if (!data.title || !data.description) {
      return;
    }

    try {
      const subject = await trigger({
        input: {
          id: isNew ? undefined : subjectId,
          title: data.title,
          description: data.description,
          stageId: data.stageId,
        },
      });
      onComplete?.(subject);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={form.handleSubmit(upsertSubject)}
    >
      <h1 className="font-bold text-xl">Subject</h1>
      <Input
        type="text"
        label="subject"
        placeholder="Enter the subject"
        {...form.register('title')}
        style={{ height: '30px' }}
      />
      <Input
        label="Description"
        placeholder="Enter your description"
        {...form.register('description')}
        style={{ height: '30px' }}
      />

      <CourseStageSelector.Field<SubjectForm>
        name="stageId"
        control={form.control}
      />

      <div className="flex flex-row gap-1">
        <div className="grow"></div>
        <Button
          className="outline outline-1 outline-offset"
          color="danger"
          type="button"
          variant="light"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" color="secondary" disabled={isMutating}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default SubjectForm;
