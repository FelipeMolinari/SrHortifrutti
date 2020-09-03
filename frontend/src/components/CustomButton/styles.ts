import styled from 'styled-components';

interface ButtonProps {
  colorName: string;
}
export const Container = styled('button')<ButtonProps>`
  width: 100%;
  height: 3.6rem;
  text-decoration: none;
  border-radius: 0.4rem;
  border: 0px;
  color: #232423;
  display: flex;
  justify-content: center;
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
