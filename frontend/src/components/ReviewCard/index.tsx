import { Line } from 'rc-progress';
import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
import MainApi from '../../services/api/MainApi';
import { Container } from './styles';
import { FormReviewProps } from '../../typescriptInterface';
interface ReviewCard {
  user_id: string;
}

const ReviewCard: React.FC<ReviewCard> = ({ user_id }) => {
  const [reviews, setReviews] = useState<FormReviewProps[]>([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const fetcheds: FormReviewProps[] = await MainApi.getReview(user_id);
        setReviews(fetcheds);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, []);
  function averageRating() {
    const average =
      (reviews
        .map((review) => review.rate_stars)
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0) /
        reviews.length) |
      0;
    return average;
  }
  function percentagePerRatingValue(rate: number) {
    const totalItems = reviews.length;
    const reviewsRate = reviews.map((review) => Math.floor(review.rate_stars));

    const numItems = reviewsRate.filter((review) => review === rate);

    return ((numItems.length * 100) / totalItems) | 0;
  }
  return (
    <Container>
      <h1>Avaliações dos clientes</h1>
      <div className="average-rating">
        <ReactStars
          count={5}
          size={24}
          color2={'#ffd700'}
          edit={false}
          value={averageRating()}
        />

        <span className="average-span">{averageRating()} de 5</span>
      </div>
      <span className="average-text">{reviews.length} clientes avaliaram</span>
      <ul className="ratings-ul">
        <li className="ratings-li">
          <span className="star-number">5 star</span>
          <Line
            percent={percentagePerRatingValue(5)}
            strokeWidth={6}
            strokeColor="#ffdf00"
            style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
            trailColor="#e8e8e8"
            trailWidth={6}
          />

          <span className="star-percentage">{percentagePerRatingValue(5)}%</span>
        </li>
        <li className="ratings-li">
          <span className="star-number">4 star</span>
          <Line
            percent={percentagePerRatingValue(4)}
            strokeWidth={6}
            strokeColor="#ffdf00"
            style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
            trailColor="#e8e8e8"
            trailWidth={6}
          />
          <span className="star-percentage">{percentagePerRatingValue(4)}%</span>
        </li>
        <li className="ratings-li">
          <span className="star-number">3 star</span>
          <Line
            percent={percentagePerRatingValue(3)}
            strokeWidth={6}
            strokeColor="#ffdf00"
            style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
            trailColor="#e8e8e8"
            trailWidth={6}
          />
          <span className="star-percentage">{percentagePerRatingValue(3)}%</span>
        </li>
        <li className="ratings-li">
          <span className="star-number">2 star</span>
          <Line
            percent={percentagePerRatingValue(2)}
            strokeWidth={6}
            strokeColor="#ffdf00"
            style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
            trailColor="#e8e8e8"
            trailWidth={6}
          />
          <span className="star-percentage">{percentagePerRatingValue(2)}%</span>
        </li>
        <li className="ratings-li">
          <span className="star-number">1 star</span>
          <Line
            percent={percentagePerRatingValue(1)}
            strokeWidth={6}
            strokeColor="#ffdf00"
            style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
            trailColor="#e8e8e8"
            trailWidth={6}
          />
          <span className="star-percentage">{percentagePerRatingValue(1)}%</span>
        </li>
      </ul>
      <span className="footer">Avaliação feita pelos clientes</span>
    </Container>
  );
};

export default ReviewCard;
