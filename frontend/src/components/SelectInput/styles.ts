import styled from 'styled-components';
export const Container = styled('div')`
  background-color: var(--commum-input);
  position: relative;

  width: 100%;
  height: 100%;
  height: 5.4rem;
  overflow: hidden;
`;

export const Select = styled('select')`
  color: var(--commum-text);
  border: 0;
  outline: 0;
  background: transparent;
  border-image: none;
  outline-offset: -2px;
  border-color: transparent;
  outline-color: transparent;
  box-shadow: none;
  -webkit-appearance: none;
  width: 100%;
  position: absolute;
  font: 1.6rem Poppins;
  top: 0;
  bottom: 0;
  padding: 0.8rem 1.8rem;
`;
