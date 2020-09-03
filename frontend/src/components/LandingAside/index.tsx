import React from 'react';
import { Container, BackgroundDropDown } from './styles';
import LandingImage from '../../assets/images/landing-image.png';
function LangingAside() {
  return (
    <Container className="landing-aside">
      <BackgroundDropDown />
      <div className="content">
        <h1 className="logo-title">SeuHortifruti</h1>
        <span className="logo-complement">
          Seu hortifrutti nunca esteve tão perto de você!
        </span>
        <img
          className="landing-image"
          src={LandingImage}
          alt="Imagem vendedor"
        />
      </div>
    </Container>
  );
}
export default LangingAside;
