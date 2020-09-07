import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import LandingAside from '../../components/LandingAside';
import LandingMain from '../../components/LandingMain';
import ContainerMain from '../../components/ContainerMain';
import { Container } from './styles';
import CustomButton from '../../components/CustomButton';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';

const RetrievePassword: React.FC = () => {
  const { errors, register, handleSubmit, watch } = useForm();

  return (
    <ContainerMain>
      <LandingAside />
      <LandingMain>
        <Container>
          <Form
            name="Esqueceu a sua senha?"
            description="Não tem problema, vamos dar um jeito nisso!"
          >
            <InputBlock
              {...{
                name: 'email',
                type: 'email',
                placeholder: 'E-mail'
              }}
              ref={register}
            />
          </Form>

          <div className="footer-container">
            <CustomButton colorName="--color-primary" disabled={!watch('email')}>
              Enviar
            </CustomButton>
          </div>
        </Container>
      </LandingMain>
    </ContainerMain>
  );
};

export default RetrievePassword;
