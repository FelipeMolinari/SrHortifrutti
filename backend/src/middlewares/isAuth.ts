import { NextFunction, Response } from "express"
import jwt from 'jsonwebtoken'
import {IGetUserAuthInfoRequest} from '../definitions'
import {UserPayloadProps} from '../definitions'

const isAuth = (req:IGetUserAuthInfoRequest,res:Response, next: NextFunction)=>{
  const token = req.headers.authorization;
  if(token){
    const onlyToken = token.split(' ')[1];
    jwt.verify(onlyToken, process.env.JWT_SECRET, (error, decoded:UserPayloadProps)=>{
      if(error){
        return res.status(401).send({msg: "Invalid Token"})
      }
        req.user = decoded._id;
        return null;
    })
    return next();
  }

  return res.status(401).send({msg:"Token is not suplied."});
}
export default isAuth;