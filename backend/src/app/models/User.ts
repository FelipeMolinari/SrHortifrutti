import mongoose, { Document, Model, Schema} from "mongoose";
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
})


interface IUserSchema {
  _id:string;
  name: string;
  cellphone: string;
  email: string;
  password: string;
  cep: string;
  street: string;
  neighborhood: string,
  number:number;
}

interface UserModel extends Omit<IUserSchema,"_id">, Document {}

UserSchema.pre<UserModel>("save", function(next) {
  if (this.isModified("password")) {
    this.password = hashPassword(this.password)
  }
  next()
});

const User: Model<UserModel> = mongoose.model('User', UserSchema)

export default User;