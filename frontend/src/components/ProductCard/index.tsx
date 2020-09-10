import React, { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { ProductsContext } from '../../contexts/ProductContext';
import { Container } from './styles';
import { ProductCardProps } from '../../typescriptInterface/index';
import adjust from '../../util/shadeColor';

const ProductCard: React.FC<ProductCardProps> = ({ product, setConfirmBoth, className }) => {
	const { addToCart } = useContext(ProductsContext);
	const { name, price, image_url, darkColor, id } = product;
	function handleAddToCart(id: number) {
		addToCart(id);
	}
	return (
		<Container>
			<div className={`content ${className}`} style={{ backgroundColor: darkColor }}>
				{/* <AiTwotoneDelete
          className="admin-itens delete-buttom"
          onClick={() => {
            setConfirmBoth && setConfirmBoth(true);
          }}
      /> */}
				<div className="header-card">
					<span className="name">{name}</span>
					<div>
						<span className="price">R$ {price}</span>
						<span className="unity">1 Kg</span>
					</div>
				</div>
				<div className="avatar-container">
					<img src={image_url} alt="" className="product-avatar" />
				</div>
				<button
					className="footer-card"
					style={{ backgroundColor: adjust(darkColor, -8) }}
					onClick={() => handleAddToCart(id)}
				>
					<AiOutlinePlus color={adjust(darkColor, -50)} className="revertscale" />
				</button>
			</div>
		</Container>
	);
};

export default ProductCard;
