import React from 'react';
import maca from '../../assets/products/maca.png';
import banana from '../../assets/products/banana.png';
import laranja from '../../assets/products/laranja.png';
import { Container, GridContainer } from './styles';
import Search from '../../components/Search';
import ProductCard from '../../components/ProductCard';
import { ProductCardProps } from '../../typescriptInterface';

const productsMock = [
  {
    darkColor: '#FFE3E5',
    image_url:
      'https://lh3.googleusercontent.com/proxy/oyvEHSjwNwDADp0MoDw4Fsb3enKYOY2P_ihi2Jbay56wrQPUMYTRDcupRLJmZdwE0ZeiLH2rbAC7oDdMemuMl6U0jqU3RYHqUTf9rCwJqKqZZus46zjDQevClFEEfsSqNnSgTDlNPEerK7DHEQ',
    name: 'Maça fresquinha',
    price: '2,99'
  },
  {
    darkColor: '#FFF6C8',
    image_url:
      'https://lh3.googleusercontent.com/proxy/gyw6AgXtjtzzmAe3OqjclnBi0E47ocj0YfIWDQh5LrKhkDrXDn7V2CtX96mM-yd1hTVBg-VmeS4hFRMVA3wb5UU2tdCIKX4sCju4UK_KpKAn2Ed-00uyEZ7I',
    name: 'Banana',
    price: '2,99'
  },
  {
    darkColor: '#FFE08E',
    image_url:
      'https://imagensemoldes.com.br/wp-content/uploads/2018/07/Imagem-de-Frutas-Laranja-12-PNG-1200x1045.png',
    name: 'Laranja',
    price: '2,99'
  },
  {
    darkColor: '#FFC8C8',
    image_url: 'https://polpasefrutas.com.br/arquivos/imagens/produtos/mesa/morango.png',
    name: 'Morango',
    price: '2,99'
  },
  {
    darkColor: '#FFC8EC',
    image_url: 'https://www.tial.com.br/wp-content/uploads/2018/10/uva.png',
    name: 'Uva',
    price: '2,99'
  },
  {
    darkColor: '#E3FFC8',

    image_url: 'https://fortali.com.br/wp-content/uploads/2020/04/14201-1.png',
    name: 'Uva',
    price: '2,99'
  },
  {
    darkColor: '#FFDCC8',

    image_url:
      'https://aldeiadev.com.br/interfruit/wp-content/uploads/2019/06/mamao-golden.png',
    name: 'Mamão',
    price: '2,99'
  }
] as ProductCardProps[];
const BestProducts: React.FC = () => {
  return (
    <Container>
      <div className="top-content">
        <div className="top-left">
          <h1>Promoções</h1>
          <p>Os melhores preços </p>
        </div>
        <Search className="search-input" placeholder="Procurar por endereço" />
      </div>
      <GridContainer>
        {productsMock.map((product) => {
          const { image_url, name, price, darkColor } = product;
          return <ProductCard {...{ darkColor, image_url, name, price }}></ProductCard>;
        })}
      </GridContainer>
    </Container>
  );
};

export default BestProducts;
