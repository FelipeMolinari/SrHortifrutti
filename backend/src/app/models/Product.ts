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
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductType', required: true }

  
},{  timestamps: { currentTime: () => Math.floor(Date.now() / 1000)}}
)

ProductSchema.pre('find', function() {
  this.populate('owner_id','name cellphone email cep street neighborhood number');
  this.populate('type')
  
});

interface IProduct {
  name: string;
  price: string;
  owner_id:string;
  type:string;
  
}
interface IProductDocument extends IProduct, Document {};


const Product =  model<IProductDocument>('Product', ProductSchema)
// Always attach `populate()` to `find()` calls

export default Product;