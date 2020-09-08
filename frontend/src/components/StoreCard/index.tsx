import React from 'react';
import icon from '../../assets/images/logo.png';

import {
  Container,
  HeaderCard,
  DatasList,
  LocalIcon,
  ProductsQtdIcon,
  AverageValueIcon
} from './styles';

const StoreCard: React.FC = () => {
  return (
    <Container>
      <HeaderCard className="store-main-data">
        <img src={icon} alt="" />
        <span className="store-name">Hortifruti do seu abreu</span>
      </HeaderCard>
      <DatasList>
        <li>
          <LocalIcon />
          <span>Rua machado Nunes</span>
        </li>
        <li>
          <ProductsQtdIcon />
          <span>18 produtos</span>
        </li>
        <li>
          <AverageValueIcon />
          <span>R$ 4,99</span>
        </li>
      </DatasList>
    </Container>
  );
};

export default StoreCard;
