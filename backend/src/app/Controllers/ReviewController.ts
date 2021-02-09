import { Request, Response} from 'express'
import Review from '../models/Review';
import * as Yup from 'yup'

class ReviewController{
  async store(req: Request, res: Response){
    const schema = Yup.object().shape({
      rate_stars: Yup.number()
    })
    try {

      if (!(await schema.isValid(req.body))) {
        return res.send({msg: "Validations Fails"})
      }

      const review = new Review(req.body)
      const newReview = await review.save();

      console.log(newReview ,"new")
      return res.send(newReview)
    } catch (error) {
      return res.send({error})
    }
  }
    
  async index(req: Request, res: Response){
    const {user_id} = req.params;
    
    try {
      const reviews = await Review.find({user_rated_id: user_id});
      return res.send(reviews)
    } catch (error) {
      return res.send({error})
    }
  }
    
  
}

export default new ReviewController();