import User from  '../models/User';
import {Request, Response} from 'express'
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

}
export default new UserController();