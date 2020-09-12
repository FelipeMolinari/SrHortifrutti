import {Request} from 'express'
export interface ProductProps {
	id: number;
	name: string;
	price: string;
	image_url: string;
	darkColor: string;
	owner_name?: string;
}
export interface IGetUserAuthInfoRequest extends Request{
  user: string;
}
export interface UserPayloadProps{
  _id: string;
  email: string;
}