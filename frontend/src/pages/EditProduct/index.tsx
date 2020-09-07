import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

import { Header, ContainerMain } from './styles';
import ContainerDashboardPages from '../../styles/components/ContainerDashboardPages';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';
import CustomButton from '../../components/CustomButton';
import SelectInput from '../../components/SelectInput';
import ProductCard from '../../components/ProductCard';
import selectedImage from '../../util/selectedImage';
const AddProduct: React.FC = () => {
  const { errors, register, handleSubmit, watch } = useForm();
  function handleOnclick() {}
  return (
    <ContainerDashboardPages>
      <Header>
        <AiOutlineArrowLeft />
        <div>
          <h1>Editar Produto</h1>
          <p>Faça as modificações no seu produto!</p>
        </div>
      </Header>
      <ContainerMain className="main-add">
        <div className="left">
          <Form>
            <ul>
              <li>
                <InputBlock
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
                  {...{
                    name: 'value',
                    type: 'text',
                    mask: '99,99',
                    placeholder: 'Valor'
                  }}
                  ref={register}
                />
              </li>
              <li>
                <SelectInput id="products" name="product" ref={register} />
              </li>
            </ul>
          </Form>
          <CustomButton
            colorName="--color-primary"
            disabled={!(watch('name') && watch('value') && watch('product') !== '0')}
            onClick={handleOnclick}
          >
            Criar
          </CustomButton>
        </div>
        <div className="right">
          <ProductCard
            name={watch('name')}
            darkColor="#f1f1f1"
            color="#fff"
            price={watch('value')}
            image_url={selectedImage(parseInt(watch('product')))}
            className="no-pointer-event"
          />
        </div>
      </ContainerMain>
    </ContainerDashboardPages>
  );
};

export default AddProduct;
