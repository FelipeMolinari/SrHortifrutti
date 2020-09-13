import React from 'react';
import { useProducts } from '../../contexts/ProductContext';
import { Container, GridContainer } from './styles';
import Search from '../../components/Search';
import ProductCard from '../../components/ProductCard';

const BestProducts: React.FC = () => {
  const { avaiablesProducts, loading, rejected } = useProducts();
  console.log(loading, rejected, avaiablesProducts);
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
            const { image_url, name, price, darkColor, id } = product;
            return <ProductCard product={{ darkColor, image_url, name, price, id }} />;
          })}
        </GridContainer>
      )}
      {rejected && <h1>Não foi possível conectar com o servidor</h1>}
    </Container>
  );
};

export default BestProducts;
