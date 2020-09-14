import {Schema, model, Document} from 'mongoose'

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

const Gallery =  model<IGallerySchemaDocument>('Gallery', GallerySchema)

export default Gallery;