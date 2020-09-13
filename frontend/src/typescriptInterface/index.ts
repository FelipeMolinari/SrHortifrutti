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

export interface OptionsSelectProps
  extends Omit<OptionHTMLAttributes<HTMLOptionElement>, 'color'>,
    ProductType {}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  options: OptionsSelectProps[];
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
export interface ProductType {
  _id: string;
  name: string;
  color: string;
  url_image: string;
}
export interface ProductProps {
  _id: string;
  name: string;
  price: string;
  type: ProductType;
  owner?: string;
}
export interface ProductPropsStore {
  name: string;
  price: string;
  type: ProductType;
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

export interface CartProviderProps {
  avaiablesProducts: ProductProps[];
  cart: CartProps[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  changeQuantity: (id: string, newQunatity: number) => void;
  loading: boolean;
  rejected: boolean;
}
export interface ProductsProviderProps {
  products: ProductProps[];
  addProduct: (product: ProductPropsStore) => void;
  removeProduct: (id: string) => void;
  updateProduct: (id: string, productModified: ProductProps) => void;
  loading: boolean;
  rejected: boolean;
  rejectedMessage: string;
  productsTypes: ProductType[];
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
  data: UserInterface;
}

export interface UserInterface {
  name: string;
  email: string;
}

export interface AuthContextProps {
  signed: boolean;
  user: UserInterface | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
