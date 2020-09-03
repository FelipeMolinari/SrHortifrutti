import styled from 'styled-components';

interface ButtonProps {
  colorName: string;
}
export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 5.4rem;
  border-radius: 1.2rem;
  text-decoration: none;
  border: 0px;
  color: #fff;
  display: flex;
  justify-content: center;
  font: 600 1.4rem Archivo;
  letter-spacing: 0.2rem;
  align-items: center;
  cursor: pointer;
  background: ${(props) => `var(${props.colorName})`};
  transition: background-color 0.6s;
  &:hover {
    background: ${(props) => `var(${props.colorName}-dark)`};
    transform: scale(1.02);
  }
  &:disabled {
    background: var(--commum-disabled);
    color: var(--commum-text);
  }
`;
