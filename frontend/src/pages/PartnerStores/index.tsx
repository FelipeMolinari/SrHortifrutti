import React from 'react';

import { Container } from './styles';
import StoreCard from '../../components/StoreCard';

const PartnerStores: React.FC = () => {
  return (
    <Container>
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </Container>
  );
};

export default PartnerStores;
