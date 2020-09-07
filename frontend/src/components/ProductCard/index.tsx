import React from 'react';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import { Container } from './styles';
import { ProductCardProps } from '../../typescriptInterface/index';

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image_url,
  color,
  darkColor,
  setConfirmBoth,
  className
}) => {
  return (
    <Container>
      <div className={`content ${className}`} style={{ backgroundColor: color }}>
        <AiTwotoneDelete
          className="admin-itens delete-buttom"
          onClick={() => {
            setConfirmBoth && setConfirmBoth(true);
          }}
        />
        <div className="header-card">
          <span className="name">{name}</span>
          <span className="unity">1 Kg</span>
          <div>
            <span className="price">R$ {price}</span>
          </div>
        </div>
        <div className="avatar-container">
          <img src={image_url} alt="" className="product-avatar" />
        </div>
        <div className="footer-card" style={{ borderColor: darkColor }}></div>
      </div>
    </Container>
  );
};

export default ProductCard;
