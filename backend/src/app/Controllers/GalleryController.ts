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
}

export default new GalleryController();