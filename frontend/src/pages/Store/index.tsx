import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { Container, Main, Content } from './styles';
import HeaderStore from '../../components/HeaderStore';
import AsideStore from '../../components/AsideStore';
import HeaderBottom from '../../components/HeaderBottom';
import PartnerStores from '../PartnerStores';
import BestProducts from '../BestProducts';

const Store: React.FC = () => {
  const { path, url } = useRouteMatch();
  return (
    <Container>
      <HeaderStore></HeaderStore>
      <HeaderBottom />
      <Content>
        <AsideStore />
        <Main>
          <Switch>
            <Route exact path={`${path}`} component={PartnerStores}></Route>
            <Route path={`${path}/destaques`} component={BestProducts}></Route>
          </Switch>
        </Main>
      </Content>
    </Container>
  );
};

export default Store;
