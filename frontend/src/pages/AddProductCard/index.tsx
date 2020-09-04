import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Container } from './styles';

const AddProductCard: React.FC = ({}) => {
  return (
    <Container>
      <div className="circle"></div>
      <div className="content">
        <AiOutlinePlus />
        <div className="footer-card">
          <span>Adicionar</span>
          <span>Produto</span>
        </div>
      </div>
    </Container>
  );
};

export default AddProductCard;
