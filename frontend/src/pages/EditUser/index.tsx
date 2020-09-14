import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorsList from '../../components/ErrorsList';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';
import CustomButtom from '../../components/CustomButton';
import validCEP from '../../services/cepvalidation';

import { Container, Header, ContainerMain, FieldsContainer } from './styles';
import InputText from '../../components/InputText';

const EditUser: React.FC = () => {
  const { watch, handleSubmit, register, errors, setValue } = useForm();

  async function handleOnBlue(event: React.FocusEvent<HTMLInputElement>) {
    const data = await validCEP(event.currentTarget.value);
    if (data.error) {
    } else {
      setValue('city', data.localidade);
      setValue('neighborhood', data.bairro);
      setValue('street', data.logradouro);
    }
  }
  return (
    <Container>
      <Header>
        <div>
          <h1>Edite seus dados.</h1>
          <p>Seus dados que serão apresentados na loja podem ser editados aqui!</p>
        </div>
      </Header>
      <ContainerMain className="main-add">
        <Form id="form-edit-user">
          <FieldsContainer>
            <ul className="ul-left">
              <h3 className="title">Loja</h3>
              <li>
                <InputBlock
                  {...{
                    name: 'name',
                    type: 'text',
                    placeholder: 'Nome do Hortifrutti'
                  }}
                  ref={register({
                    required: true
                  })}
                />
              </li>
              <li>
                <InputText
                  {...{
                    name: 'name',
                    type: 'text',
                    placeholder: 'Descrição da loja'
                  }}
                  ref={register({
                    required: true
                  })}
                  rows={4}
                />
              </li>
              <li>
                <InputText
                  {...{
                    name: 'name',
                    type: 'text',
                    placeholder: 'Imagem'
                  }}
                  ref={register({
                    required: true
                  })}
                />
              </li>
            </ul>
            <ul className="ul-right">
              <h3 className="title">Contato</h3>

              <li>
                <InputBlock
                  {...{
                    name: 'cellphone',
                    type: 'tel',
                    placeholder: 'Telefone (Whatsapp)',
                    mask: '(99) 99999-9999'
                  }}
                  ref={register({
                    required: true,
                    pattern: {
                      value: /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/g,
                      message: 'Formato do celular inválido'
                    }
                  })}
                />
              </li>

              <li>
                <InputBlock
                  {...{
                    name: 'email',
                    type: 'email',
                    placeholder: 'E-mail'
                  }}
                  ref={register}
                />
              </li>

              <li>
                <InputBlock
                  {...{
                    name: 'cep',
                    type: 'text',
                    placeholder: 'CEP',
                    mask: '99999-999'
                  }}
                  onBlur={(e) => handleOnBlue(e)}
                  ref={register}
                />
              </li>
              <li>
                <InputBlock
                  {...{
                    name: 'city',
                    type: 'text',
                    placeholder: 'Cidade'
                  }}
                  disabled
                  ref={register}
                />
              </li>
              <li>
                <InputBlock
                  {...{
                    name: 'neighborhood',
                    type: 'text',
                    placeholder: 'Bairro'
                  }}
                  disabled
                  ref={register}
                />
              </li>
              <li>
                <InputBlock
                  {...{
                    name: 'street',
                    type: 'text',
                    placeholder: 'Rua'
                  }}
                  disabled
                  ref={register}
                />
              </li>
              <li>
                <InputBlock
                  {...{
                    name: 'number',
                    type: 'number',
                    placeholder: 'numero'
                  }}
                  defaultValue=""
                  ref={register}
                />
              </li>
            </ul>
          </FieldsContainer>
        </Form>
        <ErrorsList
          errorArray={Object.keys(errors).map(function (errorNamedIndex) {
            let error = errors[errorNamedIndex];
            return error;
          })}
        />
        <CustomButtom
          colorName="--color-primary"
          form="add-product-form"
          type="submit"
          disabled={!(watch('name') && watch('price') && watch('type') !== '0')}
        >
          Editar
        </CustomButtom>
      </ContainerMain>
    </Container>
  );
};

export default EditUser;
