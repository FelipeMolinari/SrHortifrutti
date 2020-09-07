import React, { forwardRef } from 'react';
import { Container, Select } from './styles';
import { SelectProps } from '../../typescriptInterface';
const SelectInput = forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, id, options }, ref) => {
    const lol = options;
    return (
      <Container>
        <Select ref={ref} {...{ name, id }}>
          <option selected disabled hidden value="0">
            Selecione o produto:
          </option>
          <option value="1">Maça</option>
          <option value="2">Banana</option>
          <option value="3">Laranja</option>
          <option value="4">Uva</option>
          <option value="5">Morango</option>
          <option value="6">Abacaxi</option>
          <option value="7">Cenoura</option>
          <option value="8">Tomate</option>
          <option value="9">Alface</option>
          <option value="10">Cebola</option>
          <option value="11">Cebolinha</option>
        </Select>
      </Container>
    );
  }
);

export default SelectInput;
