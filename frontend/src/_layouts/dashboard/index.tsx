import React from 'react';
import { IoMdNotifications } from 'react-icons/io';
import logo from '../../assets/images/logo.png';
import NavBar from '../../components/NavBar';
import { useAuth } from '../../contexts/AuthContext';
import { Wrapper, Content, Main, Header } from './styles';

const Default: React.FC = ({ children }) => {
  const { logout } = useAuth();
  return (
    <Wrapper>
      <NavBar />
      <Content>
        <Header>
          <IoMdNotifications />
          <span>Hortifruti do seu zé</span>
          <img src={logo} alt="Logo Hortifruti" />
          <button onClick={() => logout()}>Logout</button>
        </Header>
        <Main>{children}</Main>
      </Content>
    </Wrapper>
  );
};

export default Default;
