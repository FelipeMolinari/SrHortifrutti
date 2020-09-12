import React from 'react';
import { IoMdNotifications } from 'react-icons/io';
import logo from '../../assets/images/logo.png';
import NavBar from '../../components/NavBar';

import { Wrapper, Content, Main, Header } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <Content>
        <Header>
          <IoMdNotifications />
          <span>Hortifruti do seu zé</span>
          <img src={logo} alt="Logo Hortifruti" />
        </Header>
        <Main>{children}</Main>
      </Content>
    </Wrapper>
  );
};

export default Default;
