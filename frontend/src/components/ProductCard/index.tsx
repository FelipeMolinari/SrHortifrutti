import React from 'react';
import { AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai';

import { useProducts } from '../../contexts/ProductContext';
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
  const { addToCart } = useProducts();
  const { name, price, image_url, darkColor, id } = product;
  function handleAddToCart(id: number) {
    addToCart(id);
  }
  return (
    <Container>
      <div className={`content`} style={{ backgroundColor: darkColor }}>
        {routeOnPress && <Link to={`${routeOnPress}`} />}
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
        {!adminPage ? (
          <button
            className="footer-card"
            style={{ backgroundColor: adjust(darkColor, -8) }}
            onClick={() => handleAddToCart(id)}
          >
            <AiOutlinePlus color={adjust(darkColor, -50)} className="revertscale" />
          </button>
        ) : (
          <button
            className="footer-card"
            style={{ backgroundColor: adjust(darkColor, -8) }}
            onClick={() => {
              setConfirmBoth && setConfirmBoth(true);
            }}
          >
            <AiTwotoneDelete
              color={adjust(darkColor, -50)}
              className="revertscale delete-buttom"
            />
          </button>
        )}
      </div>
    </Container>
  );
};

export default ProductCard;
