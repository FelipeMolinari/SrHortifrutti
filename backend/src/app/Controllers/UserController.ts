import User from  '../models/User';
import {Request, Response} from 'express'
import * as Yup from 'yup'
import {IGetUserAuthInfoRequest} from '../../definitions'
class UserController {

	async store(req: Request, res: Response) {

    try {
      const { email } = req.body;
      let user = await User.findOne({email});
      if (user) {
        return res.status(401).json({ error: "User already exist" });
      }
      user = new User(req.body)
      const newUser = await user.save();
        
      return res.send(newUser)
      } catch ( error ){
        return res.send({msg: error.message})
      } 
  }

	async index(_: Request, res: Response) {

    try {
      let user = await User.find({});
      return res.send(user)
      } catch ( error ){
        return res.send({msg: error.message})
      } 
  }

	async update(req: IGetUserAuthInfoRequest, res: Response) {
    console.log(req.body)
      const schema = Yup.object().shape({
        cellphone: Yup.string().required(),
        cep: Yup.string().required(),
        email: Yup.string().required(),
        name: Yup.string().required(),
        number: Yup.string().required(),
        street: Yup.string().required(),
        city: Yup.string().required(),
        neighborhood: Yup.string().required(),
      });
    
   try {
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validations fails" });
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: req.user },
        req.body,
        {new:true}
        );
      console.log(updatedUser)
      return res.send(updatedUser)
   } catch (error) {
     console.log(error)
    return res.send({error});

   }
  }

  async show(req: Request, res: Response){
    try{
      const {user_id} = req.params;
      console.log(req.params)
      const user = await User.findOne({_id:user_id});
      console.log(user, "entrou aqui")
      if(user){
        return res.send(user)

      }
      return res.status(404).send({msg:"User not found"});

    }catch(error){
      return res.send({error})
    }
  }

}
export default new UserController();