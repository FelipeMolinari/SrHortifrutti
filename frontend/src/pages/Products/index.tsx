import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Header, ProductGrid, Scrollable } from './styles';
import ProductCard from '../../components/ProductCard';
import { Link, useRouteMatch } from 'react-router-dom';
import maca from '../../assets/products/maca.png';
import banana from '../../assets/products/banana.png';
import laranja from '../../assets/products/laranja.png';

import { ProductCardProps } from '../../typescriptInterface/index';
import { dangerStyle, successStyle, confirmStyle } from '../../styles/alertBrn';
import AddProductCard from '../../components/AddProductCard';
import ContainerDashboardPages from '../../styles/components/ContainerDashboardPages';

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
  const { url } = useRouteMatch();
  const [confirmBoth, setConfirmBoth] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogDescription, setDialogDescription] = useState('');
  return (
    <ContainerDashboardPages>
      <Header>
        <div>
          <h1>Seus produtos.</h1>
          <p>
            Todos seus produtos estão listados abaixo. Para editar algum clique no card do
            produto e edite!
          </p>
        </div>
      </Header>
      <Scrollable>
        <ProductGrid>
          <Link to={`${url}/add`}>
            <AddProductCard />
          </Link>
          {productsMock.map((product) => {
            const { color, image_url, name, price } = product;
            return (
              <ProductCard
                {...{ color, image_url, name, price, setConfirmBoth }}
              ></ProductCard>
            );
          })}
        </ProductGrid>
      </Scrollable>
      {confirmBoth && (
        <SweetAlert
          title="Tem certeza?"
          warning
          showCancel
          confirmBtnStyle={dangerStyle}
          confirmBtnText="Sim"
          cancelBtnText="Cancelar"
          cancelBtnStyle={successStyle}
          onConfirm={() => {
            setConfirmBoth(false);
            setSuccessDialog(true);
            setDialogTitle('Deletado');
            setDialogDescription('Seu produto foi deletado!');
          }}
          onCancel={() => {
            setConfirmBoth(false);
            setErrorDialog(true);
            setDialogTitle('Cancelado');
            setDialogDescription('Seu produto está seguro!');
          }}
        >
          Você não irá poder reverter isso.
        </SweetAlert>
      )}

      {errorDialog && (
        <SweetAlert
          error
          title={dialogTitle}
          confirmBtnText="OK"
          confirmBtnStyle={confirmStyle}
          onConfirm={() => setErrorDialog(false)}
        >
          {dialogDescription}
        </SweetAlert>
      )}

      {successDialog && (
        <SweetAlert
          success
          title={dialogTitle}
          confirmBtnText="OK"
          confirmBtnStyle={confirmStyle}
          onConfirm={() => setSuccessDialog(false)}
        >
          {dialogDescription}
        </SweetAlert>
      )}
    </ContainerDashboardPages>
  );
};

export default Products;
