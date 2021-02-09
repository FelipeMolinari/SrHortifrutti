import { Response, Request} from 'express'
import ProductTypes from '../models/ProductType';

class ProductTypesController{
  async index(_:Request, res:Response){
    try{
      const avaiablesProducts = await ProductTypes.find();
      console.log(avaiablesProducts);

      return res.send(avaiablesProducts)
    }catch(error){
      return res.send({msg: "Error fetching products"})
    }
  }

}

  

export default new ProductTypesController();