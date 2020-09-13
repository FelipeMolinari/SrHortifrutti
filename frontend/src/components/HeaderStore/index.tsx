import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from './styles';
import { useCart } from '../../contexts/CartContext';
import { NavLink } from 'react-router-dom';
const HeaderStore: React.FC = () => {
  const { cart } = useCart();
  return (
    <Container>
      <div className="logo">
        <h1 className="logo-title">SeuHortifruti</h1>
        <span className="logo-description">Seu hortifruti pertinho de você</span>
      </div>
      <NavLink to="/store/cart" activeClassName="actived">
        <div className="shopping-cart">
          <span>Seu carrinho</span>
          <div className="icon-shopping-cart">
            <div className="circle">
              <span>{cart.length}</span>
            </div>
            <AiOutlineShoppingCart />
          </div>
        </div>
      </NavLink>
    </Container>
  );
};

export default HeaderStore;
