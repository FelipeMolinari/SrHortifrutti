import {Schema, model, Document} from 'mongoose'
import fs from 'fs'
import path from 'path'
import {promisify} from 'util'


const AvatarSchema = new Schema({
  size: Number,
  key: String,
  url: String,
  owner_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {timestamps: true})

interface IAvatarSchema {
  name: string;
  size: number;
  key:string;
  url:string;
  owner_id:string;
}

interface IAvatarSchemaDocument extends IAvatarSchema, Document {};

AvatarSchema.pre<IAvatarSchemaDocument>('save', function(){
  if(!this.url){
    this.url = `${process.env.APP_URL}/files/uploads/avatars/${this.key}`
  }
  
})
AvatarSchema.pre<IAvatarSchemaDocument>('remove', function(){
  return promisify(fs.unlink)(path.resolve(__dirname,'..', '..','..', 'tmp', 'uploads', 'avatars',this.key));
})

const Avatar =  model<IAvatarSchemaDocument>('Avatar', AvatarSchema)

export default Avatar;