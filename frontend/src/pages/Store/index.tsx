import React from 'react';

import { Container, Main, Content } from './styles';
import HeaderStore from '../../components/HeaderStore';
import AsideStore from '../../components/AsideStore';
import HeaderBottom from '../../components/HeaderBottom';

const Store: React.FC = () => {
  return (
    <Container>
      <HeaderStore></HeaderStore>
      <HeaderBottom />
      <Content>
        <AsideStore></AsideStore>
        <Main></Main>
      </Content>
    </Container>
  );
};

export default Store;
