import mongoose, { Document, Schema, model} from "mongoose";

const ReviewSchema = new Schema({
  reviewer_name: {
    type: String,
  },
  description: {
    type: String,
  },
  rate_stars: {
    type: Number,
    enum: [1, 2,3,4,5],
    required:true,
  },
  user_rated_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
},{  timestamps:true}
)

interface IReview {
  reviewer_name: string;
  description: string;
  rate_stars:number;
  type:string;
  user_rated_id: string;
  
}
interface IReviewDocument extends IReview, Document {};


const Review =  model<IReviewDocument>('Review', ReviewSchema)
// Always attach `populate()` to `find()` calls

export default Review;