import styled from 'styled-components';

export const Container = styled('div')`
  position: relative;
  height: 5.4rem;

  &:focus-within::after {
    width: calc(100%-3.2rem);
    height: 3px;
    content: '';
    background: var(--color-primary);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
  svg {
    position: absolute;
    z-index: 1;
    fill: var(--commum-input-text);
    right: 1.6rem;
    bottom: 0;
    top: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const Input = styled('input')`
  background-color: var(--commum-input);

  width: 100%;
  height: 100%;
  color: var(--commum-text);
  border: 0;

  outline: 0;
  font: 1.6rem Poppins;
  &:disabled {
    background-color: var(--commum-disabled);
  }
  &:focus::placeholder {
    color: transparent;
  }
  padding: 0.8rem 1.8rem;
  ::placeholder {
    font: 1.5rem Poppins;
    color: var(--commum-input-text);
  }
`;
