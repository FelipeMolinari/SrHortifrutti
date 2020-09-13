import React from 'react';
import { useProducts } from '../../contexts/CartContext';
import { Container, GridContainer } from './styles';
import Search from '../../components/Search';
import ProductCard from '../../components/ProductCard';

const BestProducts: React.FC = () => {
  const { avaiablesProducts, loading, rejected } = useProducts();
  return (
    <Container>
      <div className="top-content">
        <div className="top-left">
          <h1>Promoções</h1>
          <p>Os melhores preços </p>
        </div>
        <Search className="search-input" placeholder="Procurar por endereço" />
      </div>
      {loading ? (
        <h1>Carregando dados</h1>
      ) : (
        <GridContainer>
          {avaiablesProducts.map((product) => {
            const { name, price, _id, type } = product;
            const { url_image, color } = type;
            return <ProductCard product={{ type, name, price, _id }} />;
          })}
        </GridContainer>
      )}
      {rejected && <h1>Não foi possível conectar com o servidor</h1>}
    </Container>
  );
};

export default BestProducts;
