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

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    .right {
      margin-left: 4rem;
    }
  }
  .left {
    width: 100%;
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div > button {
    margin-top: 3rem;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 4rem;
    width: 18rem;
    pointer-events: none;
  }
`;
