import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Header, ContainerMain } from './styles';
import ContainerDashboardPages from '../../styles/components/ContainerDashboardPages';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';
import CustomButton from '../../components/CustomButton';
import SelectInput from '../../components/SelectInput';

const AddProduct: React.FC = () => {
  const { register, watch } = useForm();
  const history = useHistory();
  function handleOnclick() {}

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
          {/* <ProductCard
						className="no-pointer-event"
						product={{
							name: watch('name'),
							color: '#f1f1f1',
							price: watch('value'),
							url_image: selectedImage(parseInt(watch('product')))
						}}
					/> */}
        </div>
      </ContainerMain>
    </ContainerDashboardPages>
  );
};

export default AddProduct;
