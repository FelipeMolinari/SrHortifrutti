import React, { useState, useEffect } from 'react';
import EmptyCart from '../../assets/images/empty-cart.svg';
import { useProducts } from '../../contexts/CartContext';
import { Container, CartContainer, ProductsCartList, ContactBox } from './styles';
import ProductListItem from '../../components/ProductListItem';

const Cart: React.FC = () => {
  const { cart } = useProducts();

  const [totalValue, setTotalValue] = useState('');
  useEffect(() => {
    const total = cart
      .map((item) => {
        const valuePerKg = item.product.price;
        return parseFloat(valuePerKg) * item.quantity;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0)
      .toFixed(2);
    setTotalValue(total);
  }, [cart]);

  return (
    <Container>
      <h1>Seu Carrinho</h1>
      <div className="header">
        {/* <AiOutlineArrowLeft /> */}
        <span className="cart-title">Todos os produtos do carrinho</span>
      </div>
      <CartContainer>
        <ProductsCartList>
          {cart.map((item) => {
            const { _id, name, price, owner = 'Do seu zé', type } = item.product;
            return (
              <ProductListItem
                key={_id}
                product={{ _id, type, name, price, owner }}
                quantity={item.quantity}
              />
            );
          })}
          {cart.length === 0 ? (
            <div className="empty-cart">
              <img className="landing-image" src={EmptyCart} alt="Imagem vendedor" />

              <h1>Carrinho vazio</h1>
            </div>
          ) : (
            <div className="footer-cart">
              <h3>Total: R$ {totalValue}</h3>
            </div>
          )}
        </ProductsCartList>

        {cart.length > 0 && <ContactBox />}
      </CartContainer>
    </Container>
  );
};

export default Cart;
