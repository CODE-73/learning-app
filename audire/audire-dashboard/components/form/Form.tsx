import { FormEventHandler, ReactNode, createContext } from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  UseFormReturn,
} from 'react-hook-form';

export default function Form<T extends FieldValues = FieldValues>({
  formContext,
  children,
  className,
  onSubmit,
}: {
  formContext: UseFormReturn<T>;
  children: ReactNode;
  className?: string;
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
}) {
  return (
    <FormProvider {...formContext}>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </FormProvider>
  );
}

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
);

Form.FormField = FormField;
