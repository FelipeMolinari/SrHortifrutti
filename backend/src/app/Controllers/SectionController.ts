import { Request, Response} from 'express'
import getToken from 'src/util/getToken';
import User from '../models/User';
class SectionController{
  async store(req: Request, res: Response){
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password
    })
    if(signinUser){
      res.send({
        token: getToken({_id:signinUser.id, email: signinUser.email}),
        user: {name: signinUser.name, email: signinUser.email}
      })
    }else{
      res.status(401).send({msg: "Invalid credentitals."})
    }
  }
}

export default new SectionController();