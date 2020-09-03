import { InputHTMLAttributes } from 'react';

export interface FieldProps extends InputHTMLAttributes<HTMLElement> {
  name: string;
  type: string;
  placeholder: string;
  password?: boolean;
}
export interface FormProps {
  name: string;
  description?: string;
  fields: FieldProps[];
}
