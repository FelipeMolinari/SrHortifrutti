import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Signin from './pages/Signin';
import RetrievePassword from './pages/RetrievePassword';
import SuccessfulSignin from './pages/SuccessfulSignin';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
        <Route path="/retrieve" component={RetrievePassword} />
        <Route path="/signsucc" component={SuccessfulSignin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
