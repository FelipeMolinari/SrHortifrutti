import React from 'react';

import { useRouteMatch, Link } from 'react-router-dom';

import { FaHome, FaUserEdit } from 'react-icons/fa';
import { GiFruitBowl } from 'react-icons/gi';
import { MdSettings } from 'react-icons/md';
import { Container } from './styles';
import logo from '../../assets/images/logo.png';

const NavBar: React.FC = () => {
  let { path, url } = useRouteMatch();

  return (
    <Container>
      <div className="details-store">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ul className="nav-bar">
        <li>
          <Link to={`${path}`} className="link-item">
            <div className="icon-container">
              <FaHome className="link-icon" />
            </div>

            <span className="link-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to={`${path}/products`} className="link-item">
            <div className="icon-container">
              <GiFruitBowl className="link-icon" />
            </div>
            <span className="link-text">Products</span>
          </Link>
        </li>
        <li>
          <Link to={`${path}`} className="link-item">
            <div className="icon-container">
              <FaUserEdit className="link-icon" />
            </div>
            <span className="link-text">Editar</span>
          </Link>
        </li>
        <li>
          <Link to={`${path}/products`} className="link-item">
            <div className="icon-container">
              <MdSettings className="link-icon" />
            </div>

            <span className="link-text">Configurações</span>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
