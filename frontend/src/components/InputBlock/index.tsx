import React, { forwardRef } from 'react';
import { Container, Input } from './styles';
import { FieldProps } from '../../typescriptInterface';

const InputBlock = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
  const { name, placeholder, type, password, children } = props;
  return (
    <Container>
      <Input
        className="input-camp"
        name={name}
        placeholder={placeholder}
        type={type}
        ref={ref}
      />
      {password && children}
    </Container>
  );
});
export default InputBlock;
