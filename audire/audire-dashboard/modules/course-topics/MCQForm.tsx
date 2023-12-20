import { Checkbox } from '@nextui-org/react';
import TextAreaElement from 'components/form/TextAreaElement';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { type TopicForm } from './zod';

type MCQFormProps = {
  formFieldIdx: number;
};

const MCQForm: FC<MCQFormProps> = (props) => {
  const form = useFormContext<TopicForm>();
  const correctAnswer = form.watch(
    `mcqQuestions.${props.formFieldIdx}.correctAnswer`
  );
  const options = form.watch(
    `mcqQuestions.${props.formFieldIdx}.options` as const
  );

  return (
    <>
      <div>
        <label className=" text-sm font-medium mr-4">Add Question</label>
        <TextAreaElement
          name={`mcqQuestions.${props.formFieldIdx}.question`}
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
        {options.map((option, index) => (
          <div key={index}>
            <label className=" text-sm font-medium mr-4  ">
              Option {index + 1}
            </label>
            <input
              className="rounded-lg mr-4"
              value={option}
              onChange={(e) => {
                const value = e.target.value;
                form.setValue(
                  `mcqQuestions.${props.formFieldIdx}.options`,
                  options.map((option, idx) => (idx === index ? value : option))
                );
              }}
              style={{
                border: '1px solid black',
                height: '30px',
                padding: '8px',
              }}
            />
            <Checkbox
              isSelected={correctAnswer === index}
              onValueChange={() =>
                form.setValue(
                  `mcqQuestions.${props.formFieldIdx}.correctAnswer`,
                  index
                )
              }
              size="md"
            ></Checkbox>
          </div>
        ))}
      </div>
    </>
  );
};

export default MCQForm;
