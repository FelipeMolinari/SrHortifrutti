import React from 'react';

import { Container, Header, ProductGrid, Scrollable } from './styles';
import Search from '../../components/Search';
import ProductCard from '../../components/ProductCard';

import maca from '../../assets/products/maca.png';
import banana from '../../assets/products/banana.png';
import laranja from '../../assets/products/laranja.png';

import { ProductCardProps } from '../../typescriptInterface/index';
import CustomButtom from '../../components/CustomButton';
import AddProductCard from '../AddProductCard';

const productsMock = [
  {
    color: '#FFAAAA',
    image_url: maca,
    name: 'Maça fresquinha',
    price: '2,99'
  },
  {
    color: '#FDFFAA',
    image_url: banana,
    name: 'Banana',
    price: '2,99'
  },
  {
    color: '#FFE7AA',
    image_url: laranja,
    name: 'Laranja',
    price: '2,99'
  },
  {
    color: '#FFAAAA',
    image_url: maca,
    name: 'Maça fresquinha',
    price: '2,99'
  },
  {
    color: '#FDFFAA',
    image_url: banana,
    name: 'Banana',
    price: '2,99'
  },
  {
    color: '#FFE7AA',
    image_url: laranja,
    name: 'Laranja',
    price: '2,99'
  },
  {
    color: '#FFAAAA',
    image_url: maca,
    name: 'Maça fresquinha',
    price: '2,99'
  },
  {
    color: '#FDFFAA',
    image_url: banana,
    name: 'Banana',
    price: '2,99'
  },
  {
    color: '#FFE7AA',
    image_url: laranja,
    name: 'Laranja',
    price: '2,99'
  }
] as ProductCardProps[];

const Products: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <h1>Seus produtos.</h1>
          <p>
            Todos seus produtos estão listados abaixo. Para editar algum clique no card do
            produto e edite!
          </p>
        </div>
        <Search />
      </Header>
      <Scrollable>
        <ProductGrid>
          <AddProductCard />
          {productsMock.map((product) => {
            const { color, image_url, name, price } = product;
            return <ProductCard {...{ color, image_url, name, price }}></ProductCard>;
          })}
        </ProductGrid>
      </Scrollable>
    </Container>
  );
};

export default Products;
