import { zodResolver } from '@hookform/resolvers/zod';
import { Subject, useSubject, useSubjectUpsert } from '@learning-app/syllabus';
import { Button, Input } from '@nextui-org/react';
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

    console.info('SubjectFormReset', { subject });
    form.reset({
      title: subject.title,
      description: subject.description,
      stageId: subject.stageId,
    });
  }, [form, isNew, subject]);

  const upsertSubject = async (data: SubjectForm) => {
    try {
      const subject = await trigger({
        input: {
          id: isNew ? undefined : subjectId,
          title: data.title,
          description: data.description,
        },
      });
      onComplete?.(subject);
    } catch (e) {
      console.error(e);
    }
  };

  console.info('SubjectForm', {
    form: form.getValues(),
    isNew,
    stageId,
    subjectId,
    subject,
  });

  return (
    <form
      className="flex flex-col gap-1"
      onSubmit={form.handleSubmit(upsertSubject)}
    >
      <h1>Subject</h1>
      <h6>Subject</h6>
      <Input
        type="text"
        label="subject"
        placeholder="Enter the subject"
        onClear={() => console.log('clear')}
        {...form.register('title')}
        style={{ height: '30px' }}
      />
      <h6>Description</h6>
      <Input
        label="Description"
        placeholder="Enter your description"
        onClear={() => console.log('clear')}
        {...form.register('description')}
        style={{ height: '30px' }}
      />
      <div className="flex flex-row  gap-1 ">
        <Button
          className="outline outline-1 outline-offset"
          color="danger"
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
