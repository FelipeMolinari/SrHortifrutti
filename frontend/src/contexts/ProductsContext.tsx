import React, { createContext, useState, useEffect, useContext } from 'react';
import {
  ProductProps,
  ProductPropsStore,
  ProductsProviderProps,
  ProductType
} from '../typescriptInterface';

import AuthorizedApi from '../services/api/AuthorizedApi';

const ProductsContext = createContext({} as ProductsProviderProps);

export function useProduct() {
  const context = useContext(ProductsContext);
  return context;
}
const ProductsContextProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productsTypes, setProductsTypes] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [rejected, setRejected] = useState(false);
  const [rejectedMessage, setRejectedMessage] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productResponse: ProductProps[] = await AuthorizedApi.getProducts();
        const typesResponse: ProductType[] = await AuthorizedApi.getTypes();
        setProductsTypes(typesResponse);
        setProducts(productResponse);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setRejected(true);
        setRejectedMessage(`Não foi possível acessar o servidor, error msg: ${error}`);
      }
    }
    fetchProducts();
  }, []);

  async function addProduct(product: ProductPropsStore) {
    try {
      const newProduct: ProductProps = await AuthorizedApi.storeProduct(product);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.log(error);
    }
  }
  async function removeProduct(id: string) {
    try {
      await AuthorizedApi.deleteProduct(id);
      const rest = products;
      rest.splice(
        products.findIndex((product) => product._id === id),
        1
      );

      setProducts(rest);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  function updateProduct(id: string, productModified: ProductProps) {}

  const value = {
    addProduct,
    removeProduct,
    updateProduct,
    products,
    loading,
    rejected,
    rejectedMessage,
    productsTypes
  };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
