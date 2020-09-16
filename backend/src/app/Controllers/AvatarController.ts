import {Response} from 'express'
import {IGetUserAuthInfoRequest} from '../../definitions'
import Avatar from "../models/Avatar";

class AvatarController{
  async store(req: IGetUserAuthInfoRequest, res:Response){
    try{
      const {originalname: name, size, filename: key} = req.file
    const avatar = await Avatar.create({
      name, 
      size,
      key,
      url: "",
      owner_id: req.user
    })
    res.send(avatar)
    }catch(error){
      console.log(error)
      res.send({msg: "Error creating avatar"})

    }
  }
  
  async index(req: IGetUserAuthInfoRequest, res:Response){
    const {user_id} = req.params;
    try {
      const avatar = await Avatar.find({owner_id:user_id});
    return res.send(avatar);
    } catch (error) {
      
      console.log(error)
      return res.send({msg: "Error linting avatar"});
    }
  }
  
  async delete(req:IGetUserAuthInfoRequest, res:Response ){
    const avatar = await Avatar.findById(req.params.id);
    await avatar.remove();
    return res.send();
  }
}

export default new AvatarController();