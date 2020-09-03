import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Container, FieldsContainer } from './styles';
import { FormProps } from '../../typescriptInterface';
import InputPassword from '../InputPassword';
import InputBlock from '../InputBlock';
import CustomButton from '../CustomButton';
const Form: React.FC<FormProps> = ({ name, description, fields }) => {
  return (
    <Container>
      <h1 className="fom-title">{name}</h1>
      {description && <p className="form-description">{description}</p>}
      <FieldsContainer>
        {fields.map((field, index) => {
          const { name, placeholder, type, password } = field;
          return field.password ? (
            <InputPassword
              {...{ name, placeholder, type, password }}
              key={index}
            />
          ) : (
            <InputBlock
              {...{ name, placeholder, type, password }}
              key={index}
            />
          );
        })}
      </FieldsContainer>
      <div className="input-above">
        <span>Lembrar-me</span>
        <a href="/login/recuperar">Esqueci minha senha</a>
      </div>
      <div className="footer-container">
        <CustomButton
          colorName="--color-primary"
          // disabled={!(watch('email') && watch('password'))}
        >
          Entrar
        </CustomButton>

        <div>
          <span>
            Não tem conta? <a>Cadastre-se</a>
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

export default Form;
