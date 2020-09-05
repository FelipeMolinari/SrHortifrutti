import React from 'react';

import { useRouteMatch, Switch, Route } from 'react-router-dom';

import { Container, Content, Main } from './styles';

import Products from '../Products';
import Home from '../Home';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';

const DashBoard: React.FC = () => {
  let { path, url } = useRouteMatch();

  return (
    <Container>
      <NavBar />
      <Content>
        <Header />
        <Main>
          <Switch>
            <Route exact path={`${path}/home`} component={Home}></Route>
            <Route exact path={`${path}/products`} component={Products}></Route>
          </Switch>
        </Main>
      </Content>
    </Container>
  );
};

export default DashBoard;
