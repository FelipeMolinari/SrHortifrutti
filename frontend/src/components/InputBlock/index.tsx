import React, { forwardRef } from 'react';
import { Container, Input } from './styles';
import InputMask from 'react-input-mask';
import { NormalInputProps } from '../../typescriptInterface';

const InputBlock = forwardRef<HTMLInputElement, NormalInputProps>(
  ({ name, placeholder, type, password, children, mask = '', ...rest }, ref) => {
    console.log(rest.defaultValue);
    return (
      <Container>
        <InputMask
          placeholder={placeholder}
          mask={mask}
          alwaysShowMask={false}
          value={rest.defaultValue}
          {...rest}
        >
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
