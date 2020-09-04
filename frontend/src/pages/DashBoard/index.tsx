import React from 'react';

import { useRouteMatch, Switch, Route } from 'react-router-dom';

import { Container, Main } from './styles';

import Products from '../Products';
import Home from '../Home';
import NavBar from '../../components/NavBar';
const DashBoard: React.FC = () => {
  let { path, url } = useRouteMatch();

  return (
    <Container>
      <NavBar />
      <Main>
        <Switch>
          <Route exact path={`${path}`} component={Home}></Route>
          <Route exact path={`${path}/products`} component={Products}></Route>
        </Switch>
      </Main>
    </Container>
  );
};

export default DashBoard;
