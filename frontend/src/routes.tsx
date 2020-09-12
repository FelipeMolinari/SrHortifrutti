import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import RetrievePassword from './pages/RetrievePassword';
import SuccessfulSignup from './pages/SuccessfulSignup';
import DashBoard from './pages/DashBoard';
import Store from './pages/Store';
import Signup from './pages/Signup';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/retrieve" exact component={RetrievePassword} />
        <Route path="/signsucc" exact component={SuccessfulSignup} />
        <Route path="/dashboard" exact isPrivate component={DashBoard} />
        <Route path="/store" exact component={Store} />
        <Route path="/" component={() => <h1>401</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
