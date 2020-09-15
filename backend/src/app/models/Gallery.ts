import {Schema, model, Document} from 'mongoose'
import fs from 'fs'
import path from 'path'
import {promisify} from 'util'


const GallerySchema = new Schema({
  name:String,
  size: Number,
  key: String,
  url: String,
  owner_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {timestamps: true})

interface IGallerySchema {
  name: string;
  size: number;
  key:string;
  url:string;
  owner_id:string;

}

interface IGallerySchemaDocument extends IGallerySchema, Document {};

GallerySchema.pre<IGallerySchemaDocument>('save', function(){
  if(!this.url){
    this.url = `${process.env.APP_URL}/files/uploads/${this.key}`
  }
  
})
GallerySchema.pre<IGallerySchemaDocument>('remove', function(){
  return promisify(fs.unlink)(path.resolve(__dirname,'..', '..','..', 'tmp', 'uploads', this.key));
})

const Gallery =  model<IGallerySchemaDocument>('Gallery', GallerySchema)

export default Gallery;