import styled from 'styled-components';

export const Header = styled.header`
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

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  @media (min-width: 800px) {
    flex: 1;
  }
  --transition-speed: 0.2s;
  --normal-aside-width: 7rem;
  --hovered-aside-width: 24rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--commum-background);
  flex-direction: column;

  height: auto;
  min-height: 110vh;
  @media (min-width: 800px) {
    min-height: 100vh;
  }
`;
export const Main = styled.div`
  padding: 1.4rem 6rem;
  flex: 1;
  height: 100%;
`;
