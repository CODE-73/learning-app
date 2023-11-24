import { Controller } from 'react-hook-form';
import {
  Input,
  InputField,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from '@gluestack-ui/themed';
import { AlertTriangle } from 'lucide-react-native';

export type InputFieldElementProps<T extends FieldValues = FieldValues> = Omit<
  InputProps,
  'defaultValue'
> & {
  name: FieldPath<T>;
  control?: Control<T>;
  required?: boolean;
  validation?: ControllerProps<T>['rules'];
  wrapperClassName?: string;
  label?: string;
  description?: string | ReactElement;
  inputRef?: Ref<HTMLInputElement>;
};

export default function InputFieldElement<
  TFieldValues extends FieldValues = FieldValues
>({
  name,
  control,
  validation,
  label,
  description,
  onBlur,
  type,
  inputRef,
  ...props
}: InputElementProps<TFieldValues>) {
  validation ??= {};
  if (props.required && !validation.required) {
    validation.required = 'This field is required';
  }

  return (
    <FormControl>
      <Controller
        name={name}
        defaultValue=""
        control={control}
        rules={validation}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input>
            <InputField
              fontSize="$sm"
              placeholder={label}
              type="text"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              onSubmitEditing={handleKeyPress}
              returnKeyType="done"
            />
          </Input>
        )}
      />
      <FormControlError>
        <FormControlErrorIcon as={AlertTriangle} size="md" />
        <FormControlErrorText>{errors?.email?.message}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}

export default InputFieldElement;
