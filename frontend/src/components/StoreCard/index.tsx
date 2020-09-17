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
import { Link } from 'react-router-dom';
interface StoreCardProps {
  user: UserOwner;
}
const StoreCard: React.FC<StoreCardProps> = ({ user }) => {
  const { avaiablesProducts } = useCart();

  const qtdProductsUser = avaiablesProducts.filter((product) => {
    return product.owner_id?._id === user._id;
  }).length;
  const user_id = user._id;
  return (
    <Container>
      <Link to={`/store/in/${user_id}`}>
        <HeaderCard className="store-main-data">
          <img src={user.avatar_url ? user.avatar_url : icon} alt="" />
          <span className="store-name">{user.name}</span>
        </HeaderCard>
        <DatasList>
          <li>
            <LocalIcon />
            <span>
              <strong>Rua</strong>. {user.street}. {user.number}. <strong>Bairro.</strong>{' '}
              {user.neighborhood}
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
            <span>{user.cellphone}</span>
          </li>
        </DatasList>
      </Link>
    </Container>
  );
};

export default StoreCard;
