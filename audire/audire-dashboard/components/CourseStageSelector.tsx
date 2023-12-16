import { useCourses } from '@learning-app/syllabus';
import { Select, SelectItem, SelectSection } from '@nextui-org/react';
import React, { FC, ReactElement } from 'react';
import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';

interface CourseStageSelectorProps {
  value?: string;
  onChange: (params: {
    courseId: string | null;
    stageId: string | null;
  }) => void;
}

const CourseStageSelector: FC<CourseStageSelectorProps> & {
  Field: <T extends FieldValues>(
    props: CourseStageSelectorFieldProps<T>
  ) => ReactElement;
} = ({ value, onChange }) => {
  const { data: { data: courses } = { data: [] } } = useCourses();

  return (
    <Select
      label="Course"
      placeholder="Stage"
      selectedKeys={value ? [value] : []}
      className="max-w-xs"
      scrollShadowProps={{
        isEnabled: false,
      }}
      onSelectionChange={(e) => {
        if (e instanceof Set) {
          const stageId: string | null =
            e.size > 0 ? e.values().next().value : null;
          const courseId: string | null = !stageId
            ? null
            : courses.find(
                (x) => x.stages.findIndex((y) => y.id === stageId) >= 0
              )?.id ?? null;

          onChange({ courseId, stageId });
        }
      }}
    >
      {(courses || []).map((course, index) => (
        <SelectSection
          key={index}
          title={course.title}
          classNames={{
            heading:
              'flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small',
          }}
        >
          {course.stages.map((stage) => (
            <SelectItem key={stage.id}>{stage.title}</SelectItem>
          ))}
        </SelectSection>
      ))}
    </Select>
  );
};

type CourseStageSelectorFieldProps<T extends FieldValues = FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
};

function CourseStageSelectorField<T extends FieldValues>(
  props: CourseStageSelectorFieldProps<T>
) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <CourseStageSelector
          value={field.value}
          onChange={(params) => field.onChange(params.stageId)}
        />
      )}
    />
  );
}

CourseStageSelector.Field = CourseStageSelectorField;

export default CourseStageSelector;
