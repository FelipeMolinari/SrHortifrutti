import React, { useContext, useState, useEffect } from 'react';
import EmptyCart from '../../assets/images/empty-cart.svg';
import { ProductsContext } from '../../contexts/ProductContext';
import { Container, CartContainer, ProductsCartList, ContactBox } from './styles';
import ProductListItem from '../../components/ProductListItem';

const Cart: React.FC = () => {
	const { cart } = useContext(ProductsContext);

	const [ totalValue, setTotalValue ] = useState('');
	useEffect(
		() => {
			const total = cart
				.map((item) => {
					const valuePerKg = item.product.price;
					return parseFloat(valuePerKg) * item.quantity;
				})
				.reduce((acc, curr) => {
					return acc + curr;
				}, 0)
				.toFixed(2);
			setTotalValue(total);
		},
		[ cart ]
	);

	return (
		<Container>
			<h1>Seu Carrinho</h1>
			<div className="header">
				{/* <AiOutlineArrowLeft /> */}
				<span className="cart-title">Todos os produtos do carrinho</span>
			</div>
			<CartContainer>
				<ProductsCartList>
					{cart.map((item) => {
						const { darkColor, id, image_url, name, price, owner_name = 'Do seu zé' } = item.product;
						return (
							<ProductListItem
								key={item.product.id}
								product={{ darkColor, id, image_url, name, price, owner_name }}
								quantity={item.quantity}
							/>
						);
					})}
					{cart.length === 0 ? (
						<div className="empty-cart">
							<img className="landing-image" src={EmptyCart} alt="Imagem vendedor" />

							<h1>Carrinho vazio</h1>
						</div>
					) : (
						<div className="footer-cart">
							<h3>Total: R$ {totalValue}</h3>
						</div>
					)}
				</ProductsCartList>

				{cart.length > 0 && <ContactBox />}
			</CartContainer>
		</Container>
	);
};

export default Cart;
