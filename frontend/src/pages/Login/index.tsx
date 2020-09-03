import React from 'react';
import LandingAside from '../../components/LandingAside';
import LandingMain from '../../components/LandingMain';
import ContainerMain from '../../components/ContainerMain';
import { FieldProps } from '../../typescriptInterface';
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
  return (
    <ContainerMain>
      <LandingAside />
      <LandingMain>
        <Form name="Fazer login" fields={fields}></Form>
      </LandingMain>
    </ContainerMain>
  );
};

export default Login;
