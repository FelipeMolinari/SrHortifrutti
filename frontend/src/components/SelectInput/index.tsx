import React, { forwardRef } from 'react';
import { Container, Select } from './styles';
import { SelectProps } from '../../typescriptInterface';
const SelectInput = forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, id, options, ...rest }, ref) => {
    return (
      <Container>
        <Select ref={ref} {...{ name, id }} {...rest}>
          <option selected disabled hidden value="0">
            Selecione o produto:
          </option>
          {options.map((option) => {
            return (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            );
          })}
        </Select>
      </Container>
    );
  }
);

export default SelectInput;
