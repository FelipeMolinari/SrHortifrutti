import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  OptionHTMLAttributes,
  FormHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  CSSProperties
} from 'react';
import { FormProviderProps, MultipleFieldErrors, Message, Ref } from 'react-hook-form';

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
  mask?: string | (string | RegExp)[];
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
export interface ProductProps {
  id: number;
  name: string;
  price: string;
  image_url: string;
  darkColor: string;
  owner_name?: string;
}
export interface CartProps {
  product: ProductProps;
  quantity: number;
}
export interface ProductCardProps {
  product: ProductProps;
  setConfirmBoth?: Function;
  adminPage?: boolean;
  routeOnPress?: string;
}

export interface ProductsProviderProps {
  avaiablesProducts: ProductProps[];
  cart: CartProps[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  changeQuantity: (id: number, newQunatity: number) => void;
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

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorName: string;
  onPress?: void;
  containerStyle?: CSSProperties;
}
export interface SearchProps extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
}

export interface SectionResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
