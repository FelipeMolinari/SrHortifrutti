import React, { useContext } from 'react';

import LandingImage from '../../assets/images/landing-image.png';

import { LandingAside, Wrapper, LandingMain, BackgroundDropDown } from './styles';

const Login: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <LandingAside className="landing-aside">
        <BackgroundDropDown />
        <div className="content">
          <h1 className="logo-title">SeuHortifruti</h1>
          <span className="logo-complement">
            Seu hortifrutti nunca esteve tão perto de você!
          </span>
          <img className="landing-image" src={LandingImage} alt="Imagem vendedor" />
        </div>
      </LandingAside>
      <LandingMain>{children}</LandingMain>
    </Wrapper>
  );
};

export default Login;
