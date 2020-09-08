import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container } from './styles';
import CustomButtom from '../CustomButton';

const AsideStore: React.FC = () => {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  function handleClick(rota: string) {
    history.push(`store`);
  }
  return (
    <Container>
      <CustomButtom
        colorName="--color-primary"
        style={{ height: '8rem' }}
        onClick={(e) => handleClick('parceiros')}
      >
        <span>Lojas</span>
      </CustomButtom>
      <CustomButtom colorName="--color-primary" disabled style={{ height: '8rem' }}>
        <span>Destaques</span>
      </CustomButtom>
    </Container>
  );
};

export default AsideStore;
