import { Request, Response} from 'express'
import getToken from 'src/util/getToken';
import User from '../models/User';
import * as Yup from 'yup'

class SectionController{
  async store(req: Request, res: Response){
    const schema = Yup.object().shape({
      email:Yup.string().email().required(),
      password: Yup.string().required()
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validations fails" });
    }

    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password
    })
    
    if(signinUser){
      return res.send({
        token: getToken({_id:signinUser.id, email: signinUser.email}),
        user: {name: signinUser.name, email: signinUser.email}
      })
    }else{
      return res.status(401).send({msg: "Invalid credentitals."})
    }
  }
}

export default new SectionController();