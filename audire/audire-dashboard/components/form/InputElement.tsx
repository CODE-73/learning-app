import { Input, InputProps } from '@nextui-org/react';
import Form from './Form';
import { FieldPath, FieldValues } from 'react-hook-form';

type InputElementProps<T extends FieldValues = FieldValues> = InputProps & {
  name: FieldPath<T>;
};

const InputElement: React.FC<InputElementProps> = (props) => {
  return (
    <Form.FormField
      name={props.name}
      render={({ field }) => (
        <Input
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

export default InputElement;
