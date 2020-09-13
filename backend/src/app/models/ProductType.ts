import  { Document, Schema, model} from "mongoose";

const ProductTypeSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique:true
  },
  color: {
    type: String,
    unique: true,
    required: true,
  },
  url_image:{
    type: String,
    unique: true,
    required: true,
  } 
},
{
  collection:'products_types'
}
)


interface IProductType {
  identificator: string;
  name: string;
  color: string;
  url_image: string;
}
interface IProductTypeDocument extends IProductType, Document {};


const ProductType =  model<IProductTypeDocument>('ProductType', ProductTypeSchema)

export default ProductType;