import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { Container, Main, Content } from './styles';
import HeaderStore from '../../components/HeaderStore';
import AsideStore from '../../components/AsideStore';
import HeaderBottom from '../../components/HeaderBottom';
import ProvidersStore from '../ProvidersStore';
import BestProducts from '../BestProducts';
import ProductsContextProvider from '../../contexts/CartContext';
import StoreInside from '../StoreInside';
import Cart from '../Cart';

const Store: React.FC = () => {
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <ProductsContextProvider>
      <Container>
        <HeaderStore />

        <Switch>
          <Route
            path={`${path}/out`}
            render={() => {
              return (
                <>
                  <HeaderBottom />
                  <Content>
                    <AsideStore />
                    <Main>
                      <Switch>
                        <Route exact path={`${path}/out`} component={ProvidersStore} />
                        <Route
                          exact
                          path={`${path}/out/destaques`}
                          component={BestProducts}
                        />
                        <Route exact path={`${path}/out/cart`} component={Cart} />
                      </Switch>
                    </Main>
                  </Content>
                </>
              );
            }}
          />
          <Route
            path={`${url}/in`}
            render={() => {
              return <StoreInside />;
            }}
          />
        </Switch>
      </Container>
    </ProductsContextProvider>
  );
};

export default Store;
