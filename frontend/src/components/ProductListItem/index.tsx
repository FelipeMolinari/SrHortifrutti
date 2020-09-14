import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Container } from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { CartProps } from '../../typescriptInterface';

const ProductListItem: React.FC<CartProps> = ({ product, quantity }) => {
  const { _id, name, price, owner_id, type } = product;
  const { url_image } = type;
  const [mutatedPrice, setMutatedPrice] = useState(
    (parseFloat(price) * quantity).toFixed(2)
  );

  const { changeQuantity, removeFromCart } = useCart();

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value: number = parseFloat(event.target.value);
    changeQuantity(_id, value);
    const newPrice = parseFloat(price) * value;

    setMutatedPrice(newPrice ? newPrice.toFixed(2) : '0');
  }

  return (
    <Container>
      <div className="start">
        <img src={url_image} alt={`Product ${name}`} />
        <div className="description-product">
          <strong>{name}</strong>
          <span>{owner_id?.name}</span>
        </div>
      </div>
      <div className="center">
        <input
          type="number"
          min={0}
          defaultValue={quantity}
          onChange={(e) => handleOnChange(e)}
        />
        <span className="unity">Kg</span>
      </div>
      <div className="end">
        <strong>R$ {mutatedPrice}</strong>
        <AiOutlineClose onClick={() => removeFromCart(_id)} />
      </div>
    </Container>
  );
};

export default ProductListItem;
