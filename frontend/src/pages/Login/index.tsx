import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import LandingAside from '../../components/LandingAside';
import LandingMain from '../../components/LandingMain';
import ContainerMain from '../../components/ContainerMain';
import { FieldProps } from '../../typescriptInterface';
import { Container } from './styles';
import CustomButton from '../../components/CustomButton';
import Form from '../../components/Form';
const fields: FieldProps[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'E-mail'
  },

  {
    name: 'password',
    type: 'password',
    placeholder: 'Senha',
    password: true
  }
];

const Login: React.FC = () => {
  const { errors, register, handleSubmit, watch } = useForm();

  return (
    <ContainerMain>
      <LandingAside />
      <LandingMain>
        <Container>
          <Form name="Fazer login" fields={fields} register={register} />
          <div className="input-above">
            <span>Lembrar-me</span>
            <Link to="retrieve">Esqueci minha senha</Link>
          </div>
          <div className="footer-container">
            <CustomButton
              colorName="--color-primary"
              disabled={!(watch('email') && watch('password'))}
            >
              Entrar
            </CustomButton>

            <div>
              <span>
                Não tem conta? <Link to="signin">Cadastre-se</Link>
              </span>
              <div>
                <span>É de graça</span>
                <FaHeart size="1.6rem" />
              </div>
            </div>
          </div>
        </Container>
      </LandingMain>
    </ContainerMain>
  );
};

export default Login;
