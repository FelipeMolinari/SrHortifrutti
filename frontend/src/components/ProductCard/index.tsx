import React from 'react';

import { AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai';
import { useCart } from '../../contexts/CartContext';
import { Container } from './styles';
import { ProductCardProps } from '../../typescriptInterface/index';
import adjust from '../../util/shadeColor';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  setConfirmBoth,
  adminPage,
  routeOnPress
}) => {
  const { addToCart } = useCart();

  const { name, price, type, _id } = product;
  const { url_image, color } = type;
  async function handleAddToCart() {
    try {
      addToCart(_id);
    } catch (error) {}
  }

  return (
    <Container>
      <div className={`content`} style={{ backgroundColor: color }}>
        {routeOnPress && <Link to={`${routeOnPress}`} />}
        <div className="header-card">
          <span className="name">{name}</span>
          <div>
            <span className="price">R$ {price}</span>
            <span className="unity">1 Kg</span>
          </div>
        </div>
        <div className="avatar-container">
          <img src={url_image} alt="" className="product-avatar" />
        </div>
        {!adminPage ? (
          <button
            className="footer-card"
            style={{ backgroundColor: adjust(color, -8) }}
            onClick={() => handleAddToCart()}
          >
            <AiOutlinePlus color={adjust(color, -50)} className="revertscale" />
          </button>
        ) : (
          <button
            className="footer-card"
            style={{ backgroundColor: adjust(color, -8) }}
            onClick={() => {
              setConfirmBoth && setConfirmBoth({ status: true, productId: _id });
            }}
          >
            <AiTwotoneDelete
              color={adjust(color, -50)}
              className="revertscale delete-buttom"
            />
          </button>
        )}
      </div>
    </Container>
  );
};

export default ProductCard;
