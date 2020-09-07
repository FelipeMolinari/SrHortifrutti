import React from 'react';

import { Container, FieldsContainer } from './styles';
import { FormProps } from '../../typescriptInterface';

const Form: React.FC<FormProps> = ({ name, description, children }) => {
  return (
    <Container>
      <h1 className="fom-title">{name}</h1>
      {description && <p className="form-description">{description}</p>}
      <FieldsContainer>{children}</FieldsContainer>
    </Container>
  );
};
export default Form;
