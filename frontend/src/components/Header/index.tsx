import React from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { Container } from './styles';
import logo from '../../assets/images/logo.png';
const Header: React.FC = () => {
  return (
    <Container>
      <IoMdNotifications />
      <span>Hortifruti do seu zé</span>
      <img src={logo} alt="Logo Hortifruti" />
    </Container>
  );
};

export default Header;
