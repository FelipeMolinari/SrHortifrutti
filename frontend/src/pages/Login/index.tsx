import React from 'react';
import LandingAside from '../../components/LandingAside';
import LandingMain from '../../components/LandingMain';
import ContainerMain from '../../components/ContainerMain';

const Login: React.FC = () => {
  return (
    <ContainerMain>
      <LandingAside />
      <LandingMain></LandingMain>
    </ContainerMain>
  );
};

export default Login;
