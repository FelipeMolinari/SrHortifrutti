import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
