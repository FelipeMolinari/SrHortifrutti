import React from 'react';

import { useForm } from 'react-hook-form';

import { Container } from './styles';
import CustomButton from '../../components/CustomButton';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';

const RetrievePassword: React.FC = () => {
  const { register, watch } = useForm();

  return (
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
  );
};

export default RetrievePassword;
