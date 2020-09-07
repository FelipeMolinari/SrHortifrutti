import { InputHTMLAttributes, SelectHTMLAttributes, OptionHTMLAttributes } from 'react';

export interface OptionsSelectProps extends OptionHTMLAttributes<HTMLOptionElement> {
  disabled: boolean;
  label: string;
  selected: boolean;
}
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  type: string;
  name: string;
  form: string;
  options: OptionsSelectProps[];
}

export interface NormalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  password?: boolean;
}

export interface FormProps {
  name: string;
  description?: string;
}

export interface ProductCardProps {
  name: string;
  price: string;
  image_url: string;
  color: string;
  setConfirmBoth?: Function;
}

export interface CardInfoProps {
  name: string;
  value: string;
}
