import {Response, Request} from 'express'
import User from '../models/User';

class VisitController {
  async store(req: Request, res:Response){
    const {user_id} = req.body
    try {
      const user = await User.findById({user_id})
      const newVisitorCount = user.visitors_cont++;
      const userUpdated = new User({...user, visitors_cont: newVisitorCount});
      await userUpdated.save();
      return res.send(userUpdated)
    } catch (error) {
      console.log(error)
      return res.send(error)

    }
  }
}
export default new VisitController();