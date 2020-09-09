import React from 'react';

import { Container, GridContainer } from './styles';
import StoreCard from '../../components/StoreCard';
import Search from '../../components/Search';

const PartnerStores: React.FC = () => {
  return (
    <Container>
      <div className="top-content">
        <div className="top-left">
          <h1>Nossos Parceiros</h1>
          <p>Procure por um hortifruti perto de você</p>
        </div>
        <Search className="search-input" placeholder="Procurar por endereço" />
      </div>
      <GridContainer>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </GridContainer>
    </Container>
  );
};

export default PartnerStores;
