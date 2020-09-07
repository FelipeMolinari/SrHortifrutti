import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import LandingAside from '../../components/LandingAside';
import LandingMain from '../../components/LandingMain';
import ContainerMain from '../../components/ContainerMain';
import CustomButtom from '../../components/CustomButton';
import Form from '../../components/Form';

import { Container } from './styles';
import InputBlock from '../../components/InputBlock';
import InputPassword from '../../components/InputPassword';

const Signin: React.FC = () => {
  const { errors, register, handleSubmit, watch } = useForm();
  const history = useHistory();

  function handleCLickEvent() {
    history.push('/signsucc');
  }
  return (
    <ContainerMain>
      <LandingAside />
      <LandingMain>
        <Container>
          <Form name="Cadastro" description="Preencha os dados abaixo para prosseguir!">
            <ul>
              <li>
                <InputBlock
                  {...{
                    name: 'name',
                    type: 'text',
                    placeholder: 'Nome do Hortifrutti'
                  }}
                  ref={register}
                />
              </li>
              <li>
                <InputBlock
                  {...{
                    name: 'cellphone',
                    type: 'tel',
                    placeholder: 'Telefone (Whatsapp)',
                    mask: '(99) 99999-9999'
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
                    mask: '99.999.999'
                  }}
                  ref={register}
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
                <InputPassword
                  {...{
                    name: 'password',
                    type: 'password',
                    placeholder: 'Senha',
                    password: true
                  }}
                  ref={register}
                />
              </li>
            </ul>
          </Form>
          <CustomButtom
            colorName="--color-primary"
            style={{ marginTop: 36, marginBottom: 56 }}
            disabled={
              !(
                watch('name') &&
                watch('cellphone') &&
                watch('cep') &&
                watch('email') &&
                watch('password')
              )
            }
            onClick={handleCLickEvent}
          >
            <span>Concluir cadastro</span>
          </CustomButtom>
        </Container>
      </LandingMain>
    </ContainerMain>
  );
};

export default Signin;
