import React from 'react';
import { FC, useEffect } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaFileUpload } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
import { Topic, useTopic, useTopicUpsert } from '@learning-app/syllabus';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import Form from 'components/form/Form';
import InputElement from 'components/form/InputElement';
import CourseSubjectSelector from 'components/CourseSubjectSelector';
import MCQDialog from './MCQDailog';
interface TopicFormProps {
  isNew?: boolean;
  topicId?: string;
  subjectId?: string;
  onComplete?: (topic: Topic) => void;
  onCancel?: () => void;
  stageId: string | undefined;
}

const TopicFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  subjectId: z.string().min(1),
});

type TopicForm = z.infer<typeof TopicFormSchema>;

const TopicForm: FC<TopicFormProps> = ({
  isNew,
  subjectId,
  topicId,
  onComplete,
  onCancel,
  stageId,
}) => {
  const { data: topic } = useTopic({ topicId });
  const { trigger, isMutating } = useTopicUpsert();

  const form = useForm<TopicForm>({
    mode: 'onBlur',
    defaultValues: {
      subjectId,
    },
    resolver: zodResolver(TopicFormSchema),
  });
  console.log(form);
  useEffect(() => {
    if (isNew || !topic) {
      return;
    }

    // Load the form with the values of useTopic
    form.reset({
      title: topic.title,
      description: topic.description,
      subjectId: topic.subjectId,
    });
  }, [form, isNew, topic]);

  console.info('TopiformState', { ...form.formState });
  const upsertTopic = async (data: TopicForm) => {
    if (!data.title || !data.description) {
      return;
    }
    console.log(upsertTopic);
    try {
      const topic = await trigger({
        input: {
          id: isNew ? undefined : topicId,
          title: data.title,
          description: data.description,
          subjectId: data.subjectId,
          videoLink: 'video-link',
          studyMaterial: 'study-material',
        },
      });
      onComplete?.(topic);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form formContext={form} onSubmit={form.handleSubmit(upsertTopic)}>
      <h1 className="font-bold text-xl">Topic</h1>
      <InputElement
        name="title"
        label="Title"
        placeholder="Enter Topic Title"
      />
      <InputElement
        name="description"
        label="Description"
        placeholder="Enter Subject description"
      />
      <div className="flex items-center justify-center border border-4 border-black-500 border-dashed p-4 ">
        <h4 className="text-sm font-medium flex flex-col items-center justify-center">
          Upload Video
          <FaCloudUploadAlt className="text-2xl ml-2" />
        </h4>
      </div>
      <div className="flex items-center justify-center border border-4 border-black-500 border-dashed p-4">
        <h4 className=" text-sm font-medium flex flex-col items-center justify-center">
          Study Material
          <FaFileUpload className="text-2xl ml-2" />
        </h4>
      </div>
      <div className="text-sm font-medium  p-2 ">MCQ Question</div>

      <MCQDialog />
      <CourseSubjectSelector.Field
        name="subjectId"
        stageId={stageId}
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
    </Form>
  );
};

export default TopicForm;
