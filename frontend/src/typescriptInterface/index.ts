import { InputHTMLAttributes } from 'react';
import { FormProviderProps } from 'react-hook-form';
export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  password?: boolean;
}
export interface FormProps {
  name: string;
  description?: string;
  fields: FieldProps[];
  register?: FormProviderProps['register'];
}
