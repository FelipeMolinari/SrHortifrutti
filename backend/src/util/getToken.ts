import jwt from 'jsonwebtoken'
import {UserPayloadProps} from '../definitions'
 const getToken = (user: UserPayloadProps)=>{
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: '7d',
  
  })
}
export default getToken;