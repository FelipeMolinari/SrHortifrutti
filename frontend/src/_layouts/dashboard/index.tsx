import React from 'react';
import { IoMdNotifications, IoIosLogOut } from 'react-icons/io';
import logo from '../../assets/images/default-logo.png';
import NavBar from '../../components/NavBar';
import { useAuth } from '../../contexts/AuthContext';
import { Wrapper, Content, Main, Header } from './styles';

const Default: React.FC = ({ children }) => {
  const { logout, user } = useAuth();
  return (
    <Wrapper>
      <NavBar />
      <Content>
        <Header>
          <div className="store-info">
            <span>{user && user.name}</span>
            <IoMdNotifications />
            <img src={user?.avatar_url ? user.avatar_url : logo} alt="Logo Hortifruti" />
          </div>
          <button onClick={() => logout()}>
            Logout <IoIosLogOut />
          </button>
        </Header>
        <Main>{children}</Main>
      </Content>
    </Wrapper>
  );
};

export default Default;
