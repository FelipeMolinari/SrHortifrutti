import React from 'react';

import { useRouteMatch, Switch, Route } from 'react-router-dom';

import { Container, Content, Main } from './styles';

import Products from '../Products';
import Home from '../Home';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import AddProduct from '../AddProduct';
import EditProduct from '../EditProduct';

const DashBoard: React.FC = () => {
	let { path, url } = useRouteMatch();

	return (
		<Container>
			<NavBar />
			<Content>
				<Header />
				<Main>
					<Switch>
						<Route exact path={`${path}/home`} component={Home} />
						<Route exact path={`${path}/products`} component={Products} />
						<Route exact path={`${path}/products/add`} component={AddProduct} />
						<Route exact path={`${path}/products/edit/:id`} component={EditProduct} />
					</Switch>
				</Main>
			</Content>
		</Container>
	);
};

export default DashBoard;
