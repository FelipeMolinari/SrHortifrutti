import React, { forwardRef } from 'react';
import { Container, Input } from './styles';
import InputMask from 'react-input-mask';
import { NormalInputProps } from '../../typescriptInterface';

const InputBlock = forwardRef<HTMLInputElement, NormalInputProps>(
  ({ name, placeholder, type, password, children, mask = '', ...rest }, ref) => {
    return (
      <Container>
        <InputMask mask={mask} alwaysShowMask={false} {...rest}>
          <Input
            className="input-camp"
            name={name}
            placeholder={placeholder}
            type={type}
            ref={ref}
            {...rest}
          />
        </InputMask>

        {password && children}
      </Container>
    );
  }
);
export default InputBlock;
