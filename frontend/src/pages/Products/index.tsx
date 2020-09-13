import React, { useEffect, useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Header, ProductGrid, Scrollable } from './styles';
import ProductCard from '../../components/ProductCard';
import { Link, useRouteMatch } from 'react-router-dom';

import { dangerStyle, successStyle, confirmStyle } from '../../styles/alertBrn';
import AddProductCard from '../../components/AddProductCard';
import ContainerDashboardPages from '../../styles/components/ContainerDashboardPages';
import AuthorizedApi from '../../services/api/AuthorizedApi';
import { ProductProps } from '../../typescriptInterface';

const Products: React.FC = () => {
  const { url } = useRouteMatch();
  const [confirmBoth, setConfirmBoth] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogDescription, setDialogDescription] = useState('');
  const [products, setProducts] = useState<ProductProps[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [reject, setReject] = useState<boolean>(false);
  const [rejectMessage, setRejectMessage] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response: ProductProps[] = await AuthorizedApi.getProducts();
        console.log(response);
        setProducts(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setReject(true);
        setRejectMessage(`Não foi possível acessar o servidor, error msg: ${error}`);
      }
    }
    fetchProducts();
  }, []);

  function renderProducts() {
    return (
      <ProductGrid>
        <Link to={`${url}/add`}>
          <AddProductCard />
        </Link>
        {products &&
          products.map((product) => {
            const { name, price, type, _id } = product;

            return (
              <ProductCard
                key={_id}
                adminPage
                setConfirmBoth={setConfirmBoth}
                product={{ type, name, price, _id }}
                routeOnPress={`${url}/edit/${_id}`}
              />
            );
          })}
      </ProductGrid>
    );
  }
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
        {loading ? <h1>Carregando dados</h1> : renderProducts()}
        {reject && <h1>{rejectMessage}</h1>}
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
