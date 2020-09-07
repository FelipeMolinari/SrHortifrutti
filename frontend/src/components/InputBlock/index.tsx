import React, { forwardRef } from 'react';
import { Container, Input } from './styles';
import { NormalInputProps } from '../../typescriptInterface';

const InputBlock = forwardRef<HTMLInputElement, NormalInputProps>((props, ref) => {
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
