import jwt from 'jsonwebtoken'
interface UserPayloadProps{
  _id: string;
  email: string;
}
 const getToken = (user: UserPayloadProps)=>{
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: '7d',
  
  })
}
export default getToken;