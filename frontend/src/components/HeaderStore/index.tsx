import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from './styles';

const HeaderStore: React.FC = () => {
  return (
    <Container>
      <div className="logo">
        <h1 className="logo-title">SeuHortifruti</h1>
        <span className="logo-description">Seu hortifruti pertinho de você</span>
      </div>
      <div className="shopping-cart">
        <span>Seu carrinho</span>
        <div className="icon-shopping-cart">
          <div className="circle"></div>
          <AiOutlineShoppingCart />
        </div>
      </div>
    </Container>
  );
};

export default HeaderStore;
