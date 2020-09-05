import React from 'react';

import { useRouteMatch, NavLink } from 'react-router-dom';

import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineEdit,
  AiOutlineSetting
} from 'react-icons/ai';

import { Container } from './styles';

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

const NavBar: React.FC = () => {
  let { path, url } = useRouteMatch();
  console.log(path, url);

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
          <NavLink to={`${url}/home`} className="link-item" activeClassName="active">
            <div className="icon-container">
              <AiOutlineDashboard className="link-icon" />
            </div>

            <span className="link-text">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/products`} className="link-item" activeClassName="active">
            <div className="icon-container">
              <AiOutlineShoppingCart className="link-icon" />
            </div>
            <span className="link-text">Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/edit`} className="link-item" activeClassName="active">
            <div className="icon-container">
              <AiOutlineEdit className="link-icon" />
            </div>
            <span className="link-text">Editar</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/config`} className="link-item" activeClassName="active">
            <div className="icon-container">
              <AiOutlineSetting className="link-icon" />
            </div>

            <span className="link-text">Configurações</span>
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
