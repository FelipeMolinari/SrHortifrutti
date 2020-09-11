import User from  '../models/User';
import {Request, Response} from 'express'

class UserController {
	async store(req: Request, res: Response) {
    try {
      const user = new User(req.body)
    const newUser = await user.save();
    res.send(newUser)
    } catch ( error ){
      res.send({msg: error.message})
    } 
  }

}
export default new UserController();