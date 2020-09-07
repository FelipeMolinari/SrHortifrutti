import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  svg {
    margin-top: 1.6rem;
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
  }
  div {
    margin-left: 1.6rem;
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
  }
`;
