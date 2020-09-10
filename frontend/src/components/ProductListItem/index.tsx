import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductContext';
import { Container } from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { CartProps } from '../../typescriptInterface';

const ProductListItem: React.FC<CartProps> = ({ product, quantity }) => {
	const { darkColor, id, image_url, name, price, owner_name } = product;
	const [ mutatedPrice, setMutatedPrice ] = useState((parseFloat(price) * quantity).toFixed(2));

	const { changeQuantity, removeFromCart } = useContext(ProductsContext);

	function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value: number = parseFloat(event.target.value);
		changeQuantity(id, value);
		const newPrice = parseFloat(price) * value;

		setMutatedPrice(newPrice ? newPrice.toFixed(2) : '0');
	}

	return (
		<Container>
			<div className="start">
				<img src={image_url} />
				<div className="description-product">
					<strong>{name}</strong>
					<span>{owner_name}</span>
				</div>
			</div>
			<div className="center">
				<input type="number" min={0} defaultValue={quantity} onChange={(e) => handleOnChange(e)} />
				<span className="unity">Kg</span>
			</div>
			<div className="end">
				<strong>R$ {mutatedPrice}</strong>
				<AiOutlineClose onClick={() => removeFromCart(id)} />
			</div>
		</Container>
	);
};

export default ProductListItem;
