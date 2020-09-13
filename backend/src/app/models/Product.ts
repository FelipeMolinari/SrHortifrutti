import mongoose, { Document, Schema, model} from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductTypes', required: true }

  
},{  timestamps: { currentTime: () => Math.floor(Date.now() / 1000)}}
)


interface IProduct {
  name: string;
  price: string;
  description: string;
  type:object;
}
interface IProductDocument extends IProduct, Document {};


const Product =  model<IProductDocument>('Product', ProductSchema)

export default Product;