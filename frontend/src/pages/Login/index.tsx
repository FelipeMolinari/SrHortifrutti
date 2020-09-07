import React from 'react';

import { useHistory } from 'react-router-dom';
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
import InputPassword from '../../components/InputPassword';

const Login: React.FC = () => {
  const { errors, register, handleSubmit, watch } = useForm();
  const history = useHistory();
  function handleOnclick() {
    history.push('dashboard');
  }
  return (
    <ContainerMain>
      <LandingAside />
      <LandingMain>
        <Container>
          <Form name="Fazer login">
            <ul>
              <li>
                <InputBlock
                  {...{
                    name: 'email',
                    type: 'email',
                    placeholder: 'E-mail',
                    password: true
                  }}
                  ref={register}
                />
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
              </li>
            </ul>
          </Form>
          <div className="input-above">
            <span>Lembrar-me</span>
            <Link to="retrieve">Esqueci minha senha</Link>
          </div>
          <div className="footer-container">
            <CustomButton
              colorName="--color-primary"
              disabled={!(watch('email') && watch('password'))}
              onClick={handleOnclick}
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
