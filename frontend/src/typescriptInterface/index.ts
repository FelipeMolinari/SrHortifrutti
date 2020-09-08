import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  OptionHTMLAttributes,
  FormHTMLAttributes
} from 'react';
import {
  FormProviderProps,
  FieldErrors,
  MultipleFieldErrors,
  Message,
  Ref
} from 'react-hook-form';

export interface OptionsSelectProps extends OptionHTMLAttributes<HTMLOptionElement> {
  disabled: boolean;
  label: string;
  selected: boolean;
}
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  options?: OptionsSelectProps[];
}

export interface NormalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  password?: boolean;
  mask?: string;
}
export interface FormAccount {
  register?: FormProviderProps['register'];
  name: string;
  cellphone: string;
  email: string;
  password: string;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  name?: string;
  description?: string;
}

export interface ProductCardProps {
  name: string;
  price: string;
  image_url: string;
  color: string;
  darkColor: string;
  setConfirmBoth?: Function;
  className?: string;
}

export interface CardInfoProps {
  name: string;
  value: string;
}

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

export interface ListErrorsProps {
  errorArray: FieldError[];
}
