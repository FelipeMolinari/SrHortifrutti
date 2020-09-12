import React from 'react';

import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../contexts/AuthContext';

import { Container } from './styles';
import CustomButton from '../../components/CustomButton';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';
import InputPassword from '../../components/InputPassword';
import ErrorsList from '../../components/ErrorsList';

const Login: React.FC = () => {
  const { login } = useAuth();
  const { errors, register, handleSubmit, watch } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { password, email } = data;
    login(email, password);
  });
  return (
    <Container>
      <Form name="Fazer login" onSubmit={onSubmit} id="login">
        <ul>
          <li>
            <InputBlock
              {...{
                name: 'email',
                type: 'email',
                placeholder: 'E-mail'
              }}
              ref={register({
                required: true
              })}
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
              ref={register({
                required: true,
                minLength: {
                  value: 6,
                  message: 'Sua senha deve possuir ao menos 6 caracteres!' // <p>error message</p>
                }
              })}
            />
          </li>
        </ul>
      </Form>

      <div className="input-above">
        <span>Lembrar-me</span>
        <Link to="retrieve">Esqueci minha senha</Link>
      </div>

      {errors && (
        <ErrorsList
          errorArray={Object.keys(errors).map(function (errorNamedIndex) {
            let error = errors[errorNamedIndex];
            return error;
          })}
        ></ErrorsList>
      )}
      <div className="footer-container">
        <CustomButton
          form="login"
          type="submit"
          colorName="--color-primary"
          disabled={!(watch('email') && watch('password'))}
        >
          Entrar
        </CustomButton>

        <div>
          <span>
            Não tem conta? <Link to="signup">Cadastre-se</Link>
          </span>
          <div>
            <span>É de graça</span>
            <FaHeart size="1.6rem" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
