import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CustomRoute from './CustomRoute';
import Main from '../pages/Main';
import Login from '../pages/Login';
import RetrievePassword from '../pages/RetrievePassword';
import SuccessfulSignup from '../pages/SuccessfulSignup';
import DashBoard from '../pages/DashBoard';
import Store from '../pages/Store';
import Signup from '../pages/Signup';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/" exact component={Main} />
        <CustomRoute path="/login" exact component={Login} />
        <CustomRoute path="/signup" exact component={Signup} />
        <CustomRoute path="/retrieve" exact component={RetrievePassword} />
        <CustomRoute path="/dashboard" isPrivate component={DashBoard} />
        <Route path="/signsucc" exact component={SuccessfulSignup} />
        <Route path="/store" component={Store} />
        <Route path="/" component={() => <h1>401</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
