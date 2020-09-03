import React from 'react';
import { Container } from './styles';
import LandingImage from '../../assets/images/landing-image.png';
function LangingAside() {
  return (
    <Container className="landing-aside">
      <div>
        <h1 className="logo-title">SeuHortifrutti</h1>
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
