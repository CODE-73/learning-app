import {Checkbox, CheckboxProps} from "@nextui-org/react";
import Form from './Form';
import { FieldPath, FieldValues } from 'react-hook-form';

type CheckboxElementProps<T extends FieldValues = FieldValues> = CheckboxProps & {
  name: FieldPath<T>;
  label?: string;
};

const CheckboxElement: React.FC<CheckboxElementProps> = (props) => {
  return (
    <Form.FormField
      name={props.name}
      render={({ field }) => (
        <Checkbox
          {...props}
          isSelected={field.value}
          onValueChange={field.onChange}
          onBlur={field.onBlur}
        >{props.label}</Checkbox>
      )}
    />
  );
};

export default CheckboxElement;
