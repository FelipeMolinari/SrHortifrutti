import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 4.6rem;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4rem 6rem;
  background-color: transparent;
  .store-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4rem;
    svg {
      fill: var(--color-secundary);
      margin-right: 2.4rem;
      width: 2rem;
      height: 2rem;
    }
    img {
      width: 4.6rem;
      height: 4.6rem;
      border-radius: 0.6rem;
    }
    span {
      font: 600 1.6rem Poppins;
      margin: 0rem 0.6rem;
    }
  }

  button {
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: var(--color-secundary);
    padding: 0.6rem 1rem;
    border-radius: 0.4rem;
    color: var(--commum-background);
    svg {
      margin-left: 1.4rem;
      fill: var(--commum-background);
    }
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100vw;

  --transition-speed: 0.2s;
  --normal-aside-width: 7rem;
  --hovered-aside-width: 24rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--commum-background);
  flex-direction: column;
  @media (min-width: 800px) {
    flex: 1;
    height: 100vh;
  }
`;
export const Main = styled.div`
  padding: 1.4rem 6rem;
  flex: 1;
  min-height: 90vh;
  display: flex;
  @media (min-width: 800px) {
    flex: 1;
    max-height: 100vh;
  }
`;
