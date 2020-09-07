import React, { forwardRef } from 'react';
import { Container, Input } from './styles';
import InputMask from 'react-input-mask';
import { NormalInputProps } from '../../typescriptInterface';

const InputBlock = forwardRef<HTMLInputElement, NormalInputProps>(
  ({ name, placeholder, type, password, children, mask = '' }, ref) => {
    return (
      <Container>
        <InputMask mask={mask} alwaysShowMask={false}>
          <Input
            className="input-camp"
            name={name}
            placeholder={placeholder}
            type={type}
            ref={ref}
          />
        </InputMask>

        {password && children}
      </Container>
    );
  }
);
export default InputBlock;
