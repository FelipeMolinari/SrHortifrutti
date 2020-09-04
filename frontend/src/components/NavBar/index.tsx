import React from 'react';

import { useRouteMatch, Link } from 'react-router-dom';

import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineEdit,
  AiOutlineSetting
} from 'react-icons/ai';

import { Container } from './styles';

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

const NavBar: React.FC = () => {
  let { path, url } = useRouteMatch();

  return (
    <Container>
      <div className="header-navbar">
        <div className="icon-container">
          <Arrow className="link-icon" />
        </div>
        <span className="link-text title">SeuHortifruti</span>
      </div>
      <ul className="nav-bar">
        <li>
          <Link to={`${path}`} className="link-item">
            <div className="icon-container">
              <AiOutlineHome className="link-icon" />
            </div>

            <span className="link-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to={`${path}/products`} className="link-item">
            <div className="icon-container">
              <AiOutlineShoppingCart className="link-icon" />
            </div>
            <span className="link-text">Products</span>
          </Link>
        </li>
        <li>
          <Link to={`${path}`} className="link-item">
            <div className="icon-container">
              <AiOutlineEdit className="link-icon" />
            </div>
            <span className="link-text">Editar</span>
          </Link>
        </li>
        <li>
          <Link to={`${path}/products`} className="link-item">
            <div className="icon-container">
              <AiOutlineSetting className="link-icon" />
            </div>

            <span className="link-text">Configurações</span>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
