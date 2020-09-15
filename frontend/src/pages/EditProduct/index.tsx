import React, { useState, ChangeEvent } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import { Header, ContainerMain } from './styles';
import ContainerDashboardPages from '../../styles/components/ContainerDashboardPages';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';
import CustomButton from '../../components/CustomButton';
import ProductCard from '../../components/ProductCard';
import { EditProductsProps, ProductProps } from '../../typescriptInterface';
import SweetAlert from 'react-bootstrap-sweetalert';
import { confirmStyle } from '../../styles/alertBrn';
import ErrorsList from '../../components/ErrorsList';
import { useProduct } from '../../contexts/ProductsContext';
interface ParamTypes {
  id: string;
}

const AddProduct: React.FC = () => {
  const { products } = useProduct();
  const { updateProduct } = useProduct();
  const history = useHistory();
  const { errors, register, handleSubmit, watch } = useForm();
  const [successDialog, setSuccessDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogDescription, setDialogDescription] = useState('');

  const { id } = useParams<ParamTypes>();
  const initialProduct = products.filter((item) => item._id === id)[0];

  const [product, setProduct] = useState<ProductProps>(initialProduct);

  function handleOnInputChange(event: ChangeEvent<HTMLInputElement>, input: string) {
    setProduct({ ...product, [`${input}`]: event.target.value });
  }
  const onSubmit = handleSubmit(async (data) => {
    const modifiedProduct: EditProductsProps = {
      name: data.name,
      price: data.price
    };
    updateProduct(id, modifiedProduct);
    setSuccessDialog(true);
    setDialogTitle('Sucesso');
    setDialogDescription('Produto editado com sucesso');
  });

  return (
    <ContainerDashboardPages>
      <Header>
        <AiOutlineArrowLeft onClick={() => history.goBack()} />
        <div>
          <h1>Editar Produto</h1>
          <p>Faça as modificações no seu produto!</p>
        </div>
      </Header>
      <ContainerMain className="main-add">
        <div className="left">
          <Form id="edit-product-form" onSubmit={onSubmit}>
            <ul>
              <li>
                <InputBlock
                  onChange={(e) => handleOnInputChange(e, 'name')}
                  defaultValue={product.name}
                  {...{
                    name: 'name',
                    type: 'text',
                    placeholder: 'Nome'
                  }}
                  ref={register({
                    maxLength: {
                      value: 20,
                      message: 'Nome do produto excede o tamanho permitido. (10)!'
                    }
                  })}
                />
              </li>

              <li>
                <InputBlock
                  onChange={(e) => handleOnInputChange(e, 'price')}
                  defaultValue={product.price}
                  {...{
                    name: 'price',
                    type: 'text',
                    placeholder: 'Valor'
                  }}
                  ref={register({
                    pattern: {
                      value: /[0-9]{2}.[0-9]{2}/,
                      message: 'Preço do produto está em um formato incorreto! (99.99)'
                    }
                  })}
                />
              </li>
            </ul>
          </Form>
          <ErrorsList
            errorArray={Object.keys(errors).map(function (errorNamedIndex) {
              let error = errors[errorNamedIndex];
              return error;
            })}
          />
          <CustomButton
            colorName="--color-primary"
            disabled={!(watch('name') && watch('price'))}
            form="edit-product-form"
            type="submit"
          >
            Editar
          </CustomButton>
        </div>
        <div className="right ">
          <ProductCard product={product} />
        </div>
      </ContainerMain>

      {errorDialog && (
        <SweetAlert
          error
          title={dialogTitle}
          confirmBtnText="OK"
          confirmBtnStyle={confirmStyle}
          onConfirm={() => {
            setErrorDialog(false);
            history.goBack();
          }}
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
          onConfirm={() => {
            setSuccessDialog(false);
            history.goBack();
          }}
        >
          {dialogDescription}
        </SweetAlert>
      )}
    </ContainerDashboardPages>
  );
};

export default AddProduct;
