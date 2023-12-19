import React from 'react';
import { FC, useEffect } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaFileUpload } from 'react-icons/fa';
import { ModalFooter, Button, Textarea, Checkbox } from '@nextui-org/react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Topic, useTopic, useTopicUpsert } from '@learning-app/syllabus';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import Form from 'components/form/Form';
import InputElement from 'components/form/InputElement';
import CourseSubjectSelector from 'components/CourseSubjectSelector';
interface TopicFormProps {
  isNew?: boolean;
  topicId?: string;
  subjectId?: string;
  onComplete?: (topic: Topic) => void;
  onCancel?: () => void;
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

  const upsertTopic = async (data: TopicForm) => {
    if (!data.title || !data.description) {
      return;
    }

    try {
      const topic = await trigger({
        input: {
          id: isNew ? undefined : topicId,
          title: data.title,
          description: data.description,
          subjectId: data.subjectId,
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
      <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="Add MSQ" title="Add MSQ">
          <div>
            <label className=" text-sm font-medium mr-4">Add Question</label>
            <Textarea
              label="Question"
              variant="bordered"
              placeholder="Enter your question"
              disableAnimation
              disableAutosize
              classNames={{
                base: 'max-w-xs',
                input: 'resize-y min-h-[40px]',
              }}
            />
          </div>

          <div className="pt-8">
            <div>
              <label className=" text-sm font-medium mr-4  ">option 1</label>
              <input
                className="rounded-lg mr-4"
                style={{
                  border: '1px solid black',
                  height: '30px',
                  padding: '8px',
                }}
              />
              <Checkbox defaultSelected size="md"></Checkbox>
            </div>
            <div className="pt-4">
              <label className=" text-sm font-medium mr-4">option 2</label>
              <input
                className="rounded-lg mr-4"
                style={{
                  border: '1px solid black',
                  height: '30px',
                  padding: '8px',
                }}
              />
              <Checkbox defaultSelected size="md"></Checkbox>
            </div>
            <div className="pt-4">
              <label className=" text-sm font-medium mr-4">option 3</label>
              <input
                className="rounded-lg mr-4"
                style={{
                  border: '1px solid black',
                  height: '30px',
                  padding: '8px',
                }}
              />
              <Checkbox defaultSelected size="md"></Checkbox>
            </div>
            <div className="pt-4">
              <label className=" text-sm font-medium mr-4 ">option 4</label>
              <input
                className="rounded-lg mr-4"
                style={{
                  border: '1px solid black',
                  height: '30px',
                  padding: '8px',
                }}
              />
              <Checkbox defaultSelected size="md"></Checkbox>
            </div>
            <ModalFooter>
              <Button
                className="outline outline-1 outline-offset  h-6"
                color="danger"
                variant="light"
              >
                Cancel
              </Button>

              <Button className=" h-6" type="submit" color="secondary">
                Save
              </Button>
            </ModalFooter>
          </div>
        </AccordionItem>
      </Accordion>
      <CourseSubjectSelector.Field name="subjectId" control={form.control} />
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
