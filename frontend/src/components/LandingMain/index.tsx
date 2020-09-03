import React from 'react';

import { Container } from './styles';
import Form from '../Form';
import { FieldProps } from '../../typescriptInterface';

const fields: FieldProps[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'E-mail'
  },
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

const LandingMain: React.FC = () => {
  return (
    <Container>
      <Form name="Fazer login" fields={fields}></Form>
    </Container>
  );
};

export default LandingMain;
