import {Request} from 'express'

export interface IGetUserAuthInfoRequest extends Request{
  user: string;
}
export interface UserPayloadProps{
  _id: string;
  email: string;
}