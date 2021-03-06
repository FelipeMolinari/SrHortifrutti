import { Document, Model, Schema, model} from "mongoose";
import hashPassword from "src/util/hashPassword";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cellphone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: false
  },
  avatar_url:{
    type: String
  },
  visitors_cont: {
    type:Number
  }

}, {  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }})


interface IUser {
  name: string;
  cellphone: string;
  email: string;
  password: string;
  cep: string;
  street: string;
  neighborhood: string,
  number:number;
  description?:string;
  avatar_url?:string;
  city:string;
  visitors_cont: number;

}
interface IUserDocument extends IUser, Document {};

interface IUserModel extends Model<IUserDocument> {}

UserSchema.pre<IUserDocument>("save", function(next) {
  if (this.isModified("avatar_url")) {
    this.password = hashPassword(this.password)
  }
  next()
});

UserSchema.statics.findByAdress = async function findByAdress(
  this: IUserModel,
  adress: string

): Promise<IUserDocument[]> {
  
  return this.find({$or: [{cep: adress},{neighborhood: adress}, {street: adress}]});
}
const User =  model<IUserDocument>('User', UserSchema)

export default User;