import { Response, Request} from 'express'
import ProductTypes from '../models/ProductType';

class ProductController{
  async index(_:Request, res:Response){
    try{
      const avaiablesProducts = await ProductTypes.find();
      return res.send(avaiablesProducts)
    }catch(error){
      return res.send({msg: "Error fetching products"})
    }
  }

}

  

export default new ProductController();