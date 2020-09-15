import React, { createContext, useState, useEffect, useContext } from 'react';
import { ProductProps, CartProviderProps, CartProps } from '../typescriptInterface';
import {
  getLocalStorageProducts,
  setLocalStorageProducts
} from '../storage/productLocalStorage';
import MainApi from '../services/api/MainApi';

const CartContext = createContext({} as CartProviderProps);

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
const CartContextProvider: React.FC = ({ children }) => {
  const [avaiablesProducts, setAvaiablesProducts] = useState<ProductProps[]>([]);
  const [cart, setCart] = useState<CartProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [rejected, setRejected] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response: ProductProps[] = await MainApi.getProducts();
        setAvaiablesProducts(response);
        setLoading(false);
      } catch (error) {
        setRejected(true);
        console.error(error);
      }
    }
    fetchProducts();
    setCart(getLocalStorageProducts());
  }, []);

  useEffect(() => {
    setLocalStorageProducts(cart);
  }, [cart]);
  function addToCart(id: string) {
    const check = cart.every((item) => {
      return item.product._id !== id;
    });
    if (check) {
      let data = avaiablesProducts.filter((product) => {
        return product._id === id;
      });

      setCart([...cart, { product: data[0], quantity: 1 }]);
    } else {
      alert('Esse produto já está no carrinho');
    }
  }
  function removeFromCart(id: string) {
    if (window.confirm('Tem certeza que deseja deletar esse produto?')) {
      cart.splice(
        cart.findIndex((item) => {
          const verifier = item.product._id === id ? true : false;

          return verifier;
        }),
        1
      );
      setCart([...cart]);
    }
  }
  function changeQuantity(id: string, newQuantity: number) {
    const data = cart.map((item) => {
      if (item.product._id === id) {
        item.quantity = newQuantity;
      }
      return item;
    });
    setCart(data);
  }

  const value = {
    avaiablesProducts,
    cart,
    addToCart,
    removeFromCart,
    changeQuantity,
    loading,
    rejected
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
