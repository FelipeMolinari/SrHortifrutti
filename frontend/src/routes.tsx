import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Signin from './pages/Signin';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/login" component={Login} />
				<Route path="/signin" component={Signin} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
