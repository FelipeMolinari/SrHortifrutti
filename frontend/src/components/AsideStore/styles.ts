import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  button {
    margin: 0.8rem 1.6rem;
  }

  @media (min-width: 800px) {
    height: 100%;
    width: 20rem;
    justify-content: flex-start;
    margin-right: 1.6rem;
    flex-direction: column;
    button {
      margin-top: 1.6rem;
      &:first-child {
        margin-top: 2.4rem;
      }
    }
  }
`;
