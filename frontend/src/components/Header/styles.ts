import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 4.6rem;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2.6rem 6rem;
  background-color: transparent;
  svg {
    fill: var(--color-secundary);
  }
  img {
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
  }
  span {
    font: 400 1.6rem Poppins;
    margin: 0rem 1.2rem;
  }
`;
