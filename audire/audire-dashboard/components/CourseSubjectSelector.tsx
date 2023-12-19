import { useSubjects } from '@learning-app/syllabus';
import { Select, SelectItem } from '@nextui-org/react';
import React, { ReactElement } from 'react';
import { Control, FieldValues, FieldPath } from 'react-hook-form';
import Form from './form/Form';

interface CourseSubjectSelectorProps {
  stageId?: string | undefined;
  value?: string;
  onChange: (params: { subjectId: string | null }) => void;
}

const CourseSubjectSelector: React.FC<CourseSubjectSelectorProps> & {
  Field: <T extends FieldValues>(
    props: CourseSubjectSelectorFieldProps<T>
  ) => ReactElement;
} = ({ value, onChange, stageId }) => {
  const { data: { data: subjects } = { data: [] } } = useSubjects({ stageId });

  return (
    <Select
      label="Subject"
      placeholder="Select a Subject"
      className="max-w-xs"
      //   scrollShadowProps={{
      //     isEnabled: false,
      //   }}
      //   onSelectionChange={onChange({ subjectId })}
      onSelectionChange={(e) => {
        if (e instanceof Set) {
          const subjectId: string | null =
            e.size > 0 ? e.values().next().value : null;
          onChange({ subjectId });
        }
      }}
    >
      {(subjects ?? [])
        // .filter((subject) => subject.id)
        .map((subject) => (
          <SelectItem key={subject.id} title={subject.title}>
            {subject.title}
          </SelectItem>
        ))}
    </Select>
  );
};

type CourseSubjectSelectorFieldProps<T extends FieldValues = FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
};

function CourseSubjectSelectorField<T extends FieldValues = FieldValues>(
  props: CourseSubjectSelectorFieldProps<T>
) {
  return (
    <Form.FormField
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <CourseSubjectSelector
          value={field.name}
          onChange={(params) => field.onChange(params.subjectId)}
        />
      )}
    />
  );
}

CourseSubjectSelector.Field = CourseSubjectSelectorField;

export default CourseSubjectSelector;
