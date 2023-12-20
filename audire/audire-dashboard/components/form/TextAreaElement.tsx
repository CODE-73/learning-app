import { Textarea, TextAreaProps } from '@nextui-org/react';
import Form from './Form';
import { FieldPath, FieldValues } from 'react-hook-form';

type TextAreaElementProps<T extends FieldValues = FieldValues> = TextAreaProps & {
  name: FieldPath<T>;
};

const TextAreaElement: React.FC<TextAreaElementProps> = (props) => {
  return (
    <Form.FormField
      name={props.name}
      render={({ field }) => (
        <Textarea
          {...props}
          label={props.label}
          value={field.value}
          onValueChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  );
};

export default TextAreaElement;
