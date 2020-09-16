import React from 'react';

import { AiOutlineDollarCircle, AiOutlineEnvironment, AiFillStar } from 'react-icons/ai';
import { Line } from 'rc-progress';

import {
  Container,
  HeaderContent,
  Main,
  GridContainer,
  ProductsContainer,
  WelcomeContainer,
  RatingContainer,
  ReviwCard,
  ReviewForm
} from './styles';
import HeaderBottom from '../../components/HeaderBottom';
import { useCart } from '../../contexts/CartContext';
import ProductCard from '../../components/ProductCard';
import CustomButtom from '../../components/CustomButton';

const StoreInside: React.FC = ({}) => {
  const { avaiablesProducts, loading, rejected } = useCart();
  return (
    <Container>
      <HeaderBottom>
        <HeaderContent>
          <img
            src="https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2013%2F01%2F10%2F14%2FLogo-LV-58354_4275_032956204_2127284809.jpg"
            alt="hortifruti"
          />
          <div>
            <span className="store-name">
              Supermarkets Mambo - <span>Moema</span>
            </span>

            <div className="line">
              <AiOutlineDollarCircle />
              <span>Valor médio dos produtos</span>
              <div className="dot" />
              <span>R$ 18,00</span>
            </div>

            <div className="line">
              <AiOutlineEnvironment />
              <span>Rua machado nunes n58</span>
            </div>
          </div>
        </HeaderContent>
      </HeaderBottom>
      <Main>
        <WelcomeContainer>
          <span className="section-title">Bem vindo!</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </WelcomeContainer>
        <ProductsContainer>
          <span className="section-title">Ofertas</span>
          <GridContainer>
            {avaiablesProducts.map((product) => {
              const { name, price, _id, type } = product;
              return <ProductCard product={{ type, name, price, _id }} />;
            })}
          </GridContainer>
        </ProductsContainer>
        <RatingContainer>
          <span className="section-title">Avaliações</span>
          <div className="content-review">
            <ReviwCard>
              <h1>Avaliações dos clientes</h1>
              <div className="average-rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <span>4.7 de 5</span>
              </div>
              <span className="average-text">40 clientes avaliaram</span>
              <ul className="ratings-ul">
                <li className="ratings-li">
                  <span className="star-number">5 star</span>
                  <Line
                    percent={100}
                    strokeWidth={6}
                    strokeColor="#ffdf00"
                    style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
                    trailColor="#e8e8e8"
                    trailWidth={6}
                  />

                  <span className="star-percentage">84%</span>
                </li>
                <li className="ratings-li">
                  <span className="star-number">5 star</span>
                  <Line
                    percent={50}
                    strokeWidth={6}
                    strokeColor="#ffdf00"
                    style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
                    trailColor="#e8e8e8"
                    trailWidth={6}
                  />
                  <span className="star-percentage">84%</span>
                </li>
                <li className="ratings-li">
                  <span className="star-number">5 star</span>
                  <Line
                    percent={10}
                    strokeWidth={6}
                    strokeColor="#ffdf00"
                    style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
                    trailColor="#e8e8e8"
                    trailWidth={6}
                  />
                  <span className="star-percentage">84%</span>
                </li>
                <li className="ratings-li">
                  <span className="star-number">5 star</span>
                  <Line
                    percent={10}
                    strokeWidth={6}
                    strokeColor="#ffdf00"
                    style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
                    trailColor="#e8e8e8"
                    trailWidth={6}
                  />
                  <span className="star-percentage">84%</span>
                </li>
                <li className="ratings-li">
                  <span className="star-number">5 star</span>
                  <Line
                    percent={10}
                    strokeWidth={6}
                    strokeColor="#ffdf00"
                    style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
                    trailColor="#e8e8e8"
                    trailWidth={6}
                  />
                  <span className="star-percentage">84%</span>
                </li>
                <li className="ratings-li">
                  <span className="star-number">5 star</span>
                  <Line
                    percent={10}
                    strokeWidth={6}
                    strokeColor="#ffdf00"
                    style={{ flex: 1, marginLeft: 8, marginRight: 8 }}
                    trailColor="#e8e8e8"
                    trailWidth={6}
                  />
                  <span className="star-percentage">84%</span>
                </li>
              </ul>
              <span className="footer">Avaliação feita pelos clientes</span>
            </ReviwCard>
            <ReviewForm id="form-review">
              <span className="do-review">Faça uma avaliação</span>

              <input type="text" className="name" name="name" placeholder="Nome" />
              <textarea
                name=""
                id=""
                cols={30}
                rows={6}
                placeholder="Deixe um texto para o vendedor"
              ></textarea>
              <div className="footer">
                <div className="custumer-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <CustomButtom colorName="--color-secundary">Enviar</CustomButtom>
              </div>
            </ReviewForm>
          </div>
        </RatingContainer>
      </Main>
    </Container>
  );
};

export default StoreInside;
