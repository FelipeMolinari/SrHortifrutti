import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-size: 3.6rem;
    color: var(--color-primary-text);
  }
  p {
    font-size: 1.6rem;
    max-width: 68rem;
    color: var(--color-secundary-text);
  }
  div {
    &:first-child {
      margin-bottom: 2.4rem;
    }
  }
`;

export const Main = styled.div`
  width: 100%;

  @media (min-width: 900px) {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;

    grid-gap: 4rem;
  }
`;
