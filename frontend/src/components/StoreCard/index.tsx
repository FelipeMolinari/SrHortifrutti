import React from 'react';
import icon from '../../assets/images/logo.png';
import { UserOwner } from '../../typescriptInterface';
import { useCart } from '../../contexts/CartContext';
import {
  Container,
  HeaderCard,
  DatasList,
  LocalIcon,
  ProductsQtdIcon,
  CellphoneIcon
} from './styles';

const StoreCard: React.FC<UserOwner> = ({
  street,
  number,
  avatar_url,
  neighborhood,
  name,
  cellphone,
  cep,
  email,
  _id
}) => {
  const { avaiablesProducts } = useCart();
  const qtdProductsUser = avaiablesProducts.filter((product) => {
    return product.owner_id?._id === _id;
  }).length;

  return (
    <Container>
      <HeaderCard className="store-main-data">
        <img src={avatar_url ? avatar_url : icon} alt="" />
        <span className="store-name">{name}</span>
      </HeaderCard>
      <DatasList>
        <li>
          <LocalIcon />
          <span>
            <strong>Rua</strong>. {street}. {number}. <strong>Bairro.</strong>{' '}
            {neighborhood}
          </span>
        </li>
        <li>
          <ProductsQtdIcon />
          <span>
            <strong>{qtdProductsUser}</strong> produtos
          </span>
        </li>
        <li>
          <CellphoneIcon />
          <span>{cellphone}</span>
        </li>
      </DatasList>
    </Container>
  );
};

export default StoreCard;
