import React, {useContext} from 'react';
import {ProductsContext} from '../../contexts/ProductContext'
import { Container, GridContainer } from './styles';
import Search from '../../components/Search';
import ProductCard from '../../components/ProductCard';

const BestProducts: React.FC = () => {
	const {avaiablesProducts} = useContext(ProductsContext)
	return (
		<Container>
			<div className="top-content">
				<div className="top-left">
					<h1>Promoções</h1>
					<p>Os melhores preços </p>
				</div>
				<Search className="search-input" placeholder="Procurar por endereço" />
			</div>
			<GridContainer>
				{avaiablesProducts.map((product) => {
					const { image_url, name, price, darkColor, id } = product;
					return <ProductCard product={{ darkColor, image_url, name, price, id }} />;
				})}
			</GridContainer>
		</Container>
	);
};

export default BestProducts;
