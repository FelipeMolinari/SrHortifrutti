import React, { useState, useEffect } from 'react';
import ReactStars from 'react-stars';

import {
  Container,
  ChartContainer,
  Header,
  CardProductsDetails,
  Square,
  Content
} from './styles';
import MainApi from '../../services/api/MainApi';
import { useAuth } from '../../contexts/AuthContext';
import { Bar } from 'react-chartjs-2';
import { FormReviewProps } from '../../typescriptInterface';
import ReviewList from '../../components/ReviewsList';
const Home: React.FC = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<FormReviewProps[]>([]);

  useEffect(() => {
    async function fetchReviews() {
      if (user && user._id) {
        console.log(user);
        try {
          const fetcheds: FormReviewProps[] = await MainApi.getReview(user?._id);
          setReviews(fetcheds);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchReviews();
  }, []);
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Acessos diários',
        backgroundColor: 'rgba(255,99,132,0.5)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.8)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Produtos posto no carrinho',
        backgroundColor: 'rgba(140,66,132,0.5)',
        borderColor: 'rgba(140,66,132,0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(140,66,132,0.8)',
        hoverBorderColor: 'rgba(140,66,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  return (
    <Container>
      <Header>
        <div>
          <h1>Informações da loja.</h1>
          <p>Todos os dados referentes a sua loja estão presentes aqui.</p>
        </div>
      </Header>
      <Content>
        <CardProductsDetails className="details">
          <div className="card-details products">
            <span className="text-main">Produtos</span>
            <Square className="square-cont" color={'#f38181'}>
              <span>0</span>
            </Square>
            <span className="text-main">criados</span>
          </div>
          <div className="card-details values">
            <span className="text-main">Valor</span>
            <Square className="square-cont" color={'#fce38a'}>
              <span>R$ 0</span>
            </Square>
            <span className="text-main">Médio</span>
          </div>
          <div className="card-details visitors">
            <span className="text-main">Total</span>
            <Square className="square-cont" color={'#95e1d3'}>
              <span>0</span>
            </Square>
            <span className="text-main">Visitas</span>
          </div>
        </CardProductsDetails>
        <ChartContainer className="chart">
          <Bar
            data={data}
            width={100}
            height={300}
            options={{ maintainAspectRatio: false }}
          />
        </ChartContainer>

        {reviews && <ReviewList reviews={reviews} className="review"></ReviewList>}
      </Content>
    </Container>
  );
};

export default Home;
