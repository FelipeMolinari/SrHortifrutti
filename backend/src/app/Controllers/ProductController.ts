import { Response} from 'express'
import * as Yup from 'yup'
import Product from '../models/Product';
import {IGetUserAuthInfoRequest} from '../../definitions'

class ProductController{
  async store(req: IGetUserAuthInfoRequest, res: Response){
    const schema = Yup.object().shape({
      name: Yup.string()
        .required(),
      price: Yup.string().required(),
      type: Yup.string().required()
    });


    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validations fails" });
    }
    try {
      const product = new Product({...req.body, owner_id: req.user})
      const newProduct = await product.save();
      const populated = await newProduct.populate('type').execPopulate()
      return res.send(populated)
    } catch ( error ){
      return res.send({msg: error})
    } 
  }

  async index(req: IGetUserAuthInfoRequest, res: Response){
    try {
      const products = await Product.find({owner_id: req.user});
      return res.send(products)

    } catch (error) {
      return res.send({msg: 'Something get wrong trying fetching products!'})
    }
  }

  }

  

export default new ProductController();