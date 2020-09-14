import Gallery from "../models/Gallery";
import {Response} from 'express'
import {IGetUserAuthInfoRequest} from '../../definitions'

class GalleryController{
  async store(req: IGetUserAuthInfoRequest, res:Response){
    const {originalname: name, size, filename: key} = req.file
    const gallery = await Gallery.create({
      name, 
      size,
      key,
      url: "",
      owner_id: req.user
    })
    res.json(gallery)
  }
  
  async index(req: IGetUserAuthInfoRequest, res:Response){
    const gallery = await Gallery.find({owner_id:req.user});
    return res.send(gallery);
  }
  async delete(req:IGetUserAuthInfoRequest, res:Response ){
    const gallery = await Gallery.findById(req.params.id);
    await gallery.remove();
    return res.send();
  }
}

export default new GalleryController();