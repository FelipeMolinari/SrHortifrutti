import { Response, Request} from 'express'
import Product from '../models/Product';

class PublicProductsController{


  async index(_: Request, res: Response){
    try {
      const products = await Product.find({});
      
      
      return res.send(products)

    } catch (error) {
      return res.send({msg: error})
    }
  }

  }

  

export default new PublicProductsController();