import React, { ChangeEvent, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import defaultImage from '../../assets/products/default.png';
import { Header, ContainerMain } from './styles';
import ContainerDashboardPages from '../../styles/components/ContainerDashboardPages';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';
import CustomButton from '../../components/CustomButton';
import SelectInput from '../../components/SelectInput';
import ProductCard from '../../components/ProductCard';
import { OptionsSelectProps, ProductProps } from '../../typescriptInterface';
import { useProduct } from '../../contexts/ProductsContext';
import ErrorsList from '../../components/ErrorsList';
import SweetAlert from 'react-bootstrap-sweetalert';
import { confirmStyle } from '../../styles/alertBrn';

const AddProduct: React.FC = () => {
  const { errors, register, handleSubmit, watch } = useForm();
  const { productsTypes, addProduct } = useProduct();
  const [successDialog, setSuccessDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogDescription, setDialogDescription] = useState('');
  
  const options: OptionsSelectProps[] = productsTypes.map((type) => {
    return {
      color: type.color,
      name: type.name,
      url_image: type.url_image,
      _id: type._id
    };
  });
  const initialState: ProductProps = {
    name: 'Nome',
    price: 'preço',
    _id: '',
    type: {
      color: '#fff',
      name: 'Nome',
      url_image: defaultImage,
      _id: 'default'
    }
  };
  const [product, setProduct] = useState<ProductProps>(initialState);
  const history = useHistory();

  function handleOnInputChange(event: ChangeEvent<HTMLInputElement>, input: string) {
    setProduct({ ...product, [`${input}`]: event.target.value });
  }
  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const typeSelected = productsTypes.filter((type) => type._id === value)[0];
    setProduct({
      ...product,
      [`type`]: { ...typeSelected }
    });
  }
  const onSubmit = handleSubmit((data) => {
    try {
      addProduct({
        name: data.name,
        price: data.price,
        type: data.type
      });
      setSuccessDialog(true);
      setDialogTitle('Sucesso');
      setDialogDescription(`Produto ${data.name} criado!`);
    } catch (error) {
      setErrorDialog(true);
      setDialogTitle('Erro');
      setDialogDescription(`Algo deu errado ao tentar criar o produto!`);
    }
  });

  return (
    <ContainerDashboardPages>
      <Header>
        <AiOutlineArrowLeft onClick={() => history.goBack()} />
        <div>
          <h1>Novo produto</h1>
          <p>Crie um produto novinho!</p>
        </div>
      </Header>
      <ContainerMain className="main-add">
        <div className="left">
          <Form id="add-product-form" onSubmit={onSubmit}>
            <ul>
              <li>
                <InputBlock
                  onChange={(e) => handleOnInputChange(e, 'name')}
                  {...{
                    name: 'name',
                    type: 'text',
                    placeholder: 'Nome'
                  }}
                  ref={register}
                />
              </li>

              <li>
                <InputBlock
                  onChange={(e) => handleOnInputChange(e, 'price')}
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
              <li>
                <SelectInput
                  id="products"
                  name="type"
                  ref={register}
                  options={options}
                  onChange={(e) => handleSelectChange(e)}
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
            form="add-product-form"
            type="submit"
            disabled={!(watch('name') && watch('price') && watch('type') !== '0')}
          >
            Criar
          </CustomButton>
        </div>
        <div className="right">
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
