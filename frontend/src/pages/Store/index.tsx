import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { Container, Main, Content } from './styles';
import HeaderStore from '../../components/HeaderStore';
import AsideStore from '../../components/AsideStore';
import HeaderBottom from '../../components/HeaderBottom';
import PartnerStores from '../PartnerStores';
import BestProducts from '../BestProducts';
import ProductsContextProvider from '../../contexts/ProductContext';
import Cart from '../Cart';

const Store: React.FC = () => {
	const { path, url } = useRouteMatch();
	return (
		<ProductsContextProvider>
			<Container>
				<HeaderStore />
				<HeaderBottom />
				<Content>
					<AsideStore />
					<Main>
						<Switch>
							<Route exact path={`${path}`} component={PartnerStores} />
							<Route path={`${path}/destaques`} component={BestProducts} />
							<Route path={`${path}/cart`} component={Cart} />
						</Switch>
					</Main>
				</Content>
			</Container>
		</ProductsContextProvider>
	);
};

export default Store;
