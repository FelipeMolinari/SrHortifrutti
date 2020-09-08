import React from 'react';
import { AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LandingAside from '../../components/LandingAside';
import LandingMain from '../../components/LandingMain';
import ContainerMain from '../../components/ContainerMain';
import CustomButtom from '../../components/CustomButton';

import { Content } from './styles';
const Main: React.FC = () => {
  return (
    <ContainerMain>
      <LandingAside />
      <LandingMain>
        <Content>
          <h1 className="title">É muito simples</h1>
          <p className="description">
            Se você é um cliente, basta entrar e conferir as ofertas dos melhores
            hortifruttis pertinho de você, se você é um vendedor faça o seu login!
          </p>
          <div className="buttons-main">
            <Link to="login">
              <CustomButtom colorName="--color-primary" className="button">
                <div className="button-child">
                  <AiOutlineShop />
                  <span className="button-text">Sou vendedor </span>
                </div>
              </CustomButtom>
            </Link>
            <Link to="store">
              <CustomButtom colorName="--color-secundary" className="button">
                <div className="button-child">
                  <AiOutlineShoppingCart />
                  <span className="button-text">Sou cliente</span>
                </div>
              </CustomButtom>
            </Link>
          </div>
        </Content>
      </LandingMain>
    </ContainerMain>
  );
};

export default Main;
