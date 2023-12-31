import React from 'react';
import { FC, useEffect } from 'react';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import { Topic, useTopic, useTopicUpsert } from '@learning-app/syllabus';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import Form from 'components/form/Form';
import InputElement from 'components/form/InputElement';
import CourseSubjectSelector from 'components/CourseSubjectSelector';
import MCQForm from './MCQForm';
import { type TopicForm, TopicFormSchema } from './zod';
import { useMCQQuestionUpsert } from '@learning-app/syllabus';
import FileUpload from 'components/FileUpload';
import CheckboxElement from 'components/form/CheckboxElement';

interface TopicFormProps {
  isNew?: boolean;
  topicId?: string;
  subjectId?: string;
  onComplete?: (topic: Topic) => void;
  onCancel?: () => void;
  stageId: string | undefined;
}

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

  const { trigger: upsertMCQQuestions, isMutating: MCQuestionIsMutating } =
    useMCQQuestionUpsert();

  const form = useForm<TopicForm>({
    mode: 'onBlur',
    resolver: zodResolver(TopicFormSchema),
  });
  const { fields, append } = useFieldArray({
    control: form.control,
    name: 'mcqQuestions',
  });

  useEffect(() => {
    if (isNew || !topic) {
      form.reset({ mcqQuestions: [], subjectId });
      return;
    }

    // Load the form with the values of useTopic
    form.reset({
      title: topic.title,
      enabled: topic.enabled,
      description: topic.description,
      subjectId: topic.subjectId,
      mcqQuestions: topic.mcqQuestions.map((x) => ({
        ...x,
        options: x.options ?? ['', '', '', ''],
      })),
    });
  }, [form, isNew, subjectId, topic]);

  const upsertTopic = async (data: TopicForm) => {
    if (!data.title || !data.description) {
      return;
    }
    try {
      const newTopic = await trigger({
        input: {
          id: isNew ? undefined : topicId,
          title: data.title,
          enabled: data.enabled,
          description: data.description,
          subjectId: data.subjectId,
          videoLink: 'video-link',
          studyMaterial: 'study-material',
        },
      });

      await upsertMCQQuestions({
        prevMCQs: topic?.mcqQuestions ?? [],
        newMCQs: data.mcqQuestions.map((x) => ({
          ...x,
          topicId: newTopic.id,
        })),
      });

      await onComplete?.(newTopic);
    } catch (e) {
      // TODO: Add toast
      console.error(e);
    }
  };

  return (
    <Form formContext={form} onSubmit={form.handleSubmit(upsertTopic)} className='flex flex-col gap-2'>
      <h1 className="font-bold text-xl">Topic</h1>
      <CheckboxElement name="enabled" label="Enabled" />
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

      {!isNew && topic && (
        <>
          <FileUpload
            label="Upload Video"
            isBigFile={true}
            keyPrefix={`videos/`}
          />
          <FileUpload
            label="Upload Study Material"
            isBigFile={false}
            keyPrefix={`study-materials/`}
          />
        </>
      )}

      <div className="flex flex-col my-2">
        <div className="flex items-center justify-between my-2">
          <div className="text-sm font-medium">MCQ Question</div>
          <Button
            onClick={() =>
              append({
                question: 'New MCQ Question',
                options: ['', '', '', ''],
                correctOption: 0,
                explanation: '',
              })
            }
          >
            Add MCQ
          </Button>
        </div>
        <Accordion variant="splitted">
          {fields.map((field, index) => (
            <AccordionItem
              key={field.id}
              title={form.watch(`mcqQuestions.${index}.question`)}
            >
              <MCQForm formFieldIdx={index} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
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
        <Button
          type="submit"
          color="secondary"
          disabled={isMutating || MCQuestionIsMutating}
        >
          Save
        </Button>
      </div>
    </Form>
  );
};

export default TopicForm;
