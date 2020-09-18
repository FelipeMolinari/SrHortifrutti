import React from 'react';
import ReactStars from 'react-stars';
import { FormReviewProps } from '../../typescriptInterface';
import noReviews from '../../assets/images/no-reviews.svg';
import { Container, Scrollable } from './styles';
interface ReviewsList {
  reviews: FormReviewProps[];
  className: string;
}
const ReviewList: React.FC<ReviewsList> = ({ reviews, className }) => {
  return (
    <Container className={className}>
      <Scrollable>
        <ul>
          {reviews?.length > 0 ? (
            reviews?.map((review) => {
              return (
                <li>
                  <span className="name">
                    {review.reviewer_name ? review.reviewer_name : 'Sem nome'}
                  </span>
                  <ReactStars
                    count={review.rate_stars}
                    size={24}
                    color2={'#ffd700'}
                    edit={false}
                    value={5}
                  />
                  <p className="description">
                    {review.description ? review.description : 'Sem descrição'}
                  </p>
                </li>
              );
            })
          ) : (
            <li className="no-reviews">
              <span>Sem reviews por enquanto!</span>
              <img src={noReviews} alt="reviews" />
              <ul>
                <li>Siga algumas instruções para ganhar mais reviews positivas:</li>
                <li>1. Seja justo nos valores dos produtos ofertados!</li>
                <li>2. Faça uma boa descrição sobre a sua loja</li>
                <li>3. Seja rapido na entrega dos produtos</li>
              </ul>
            </li>
          )}
        </ul>
      </Scrollable>
    </Container>
  );
};

export default ReviewList;
