import React from 'react';

import { Container } from './styles';
import CustomButtom from '../CustomButton';

const AsideStore: React.FC = () => {
  return (
    <Container>
      <CustomButtom colorName="--color-primary" style={{ height: '8rem' }}>
        <span>Lojas</span>
      </CustomButtom>
      <CustomButtom colorName="--color-primary" disabled style={{ height: '8rem' }}>
        <span>Destaques</span>
      </CustomButtom>
    </Container>
  );
};

export default AsideStore;
