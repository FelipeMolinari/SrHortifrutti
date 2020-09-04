import React from 'react';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import { Container } from './styles';
import { ProductCardProps } from '../../typescriptInterface/index';

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image_url, color }) => {
  return (
    <Container>
      <div className="circle" style={{ backgroundColor: color }}></div>
      <div className="content">
        <AiTwotoneDelete className="admin-itens delete-buttom" />

        <img src={image_url} alt="" className="product-avatar" />
        <div className="footer-card">
          <span className="name">{name}</span>
          <div>
            <span className="price">R$ {price}</span>
            <AiFillEdit className="admin-itens" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductCard;
