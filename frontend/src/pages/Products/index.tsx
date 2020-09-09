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
            const { image_url, name, price, darkColor } = product;
            return (
              <Link to={`${url}/edit`}>
                <ProductCard
                  {...{ darkColor, image_url, name, price, setConfirmBoth }}
                ></ProductCard>
              </Link>
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
