import { zodResolver } from '@hookform/resolvers/zod';
import { Topic, useMCQQuestionUpsert, useTopic, useTopicUpsert } from '@learning-app/syllabus';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import CourseSubjectSelector from 'components/CourseSubjectSelector';
import { FileUploadElement } from 'components/FileUpload';
import CheckboxElement from 'components/form/CheckboxElement';
import Form from 'components/form/Form';
import InputElement from 'components/form/InputElement';
import { FC, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import MCQForm from './MCQForm';
import { TopicFormSchema, type TopicForm } from './zod';

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
      studyMaterial: topic.studyMaterial,
      videoLink: topic.videoLink,
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
          videoLink: data.videoLink,
          studyMaterial: data.studyMaterial,
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
    <Form
      formContext={form}
      onSubmit={form.handleSubmit(upsertTopic)}
      className="flex flex-col gap-2"
    >
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
          <FileUploadElement
            label="Upload Video"
            isBigFile={false}
            keyPrefix={`videos/`}
            name='videoLink'
          />
          <FileUploadElement
            name="studyMaterial"
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
