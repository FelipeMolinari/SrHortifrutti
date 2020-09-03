import React from 'react';
import { Container, Input } from './styles';
import { FieldProps } from '../../typescriptInterface';

const InputBlock: React.FC<FieldProps> = ({
  name,
  placeholder,
  type,
  password,
  children
}) => {
  return (
    <Container>
      <Input className="input-camp" name={name} placeholder={placeholder} type={type} />
      {password && children}
    </Container>
  );
};
export default InputBlock;
