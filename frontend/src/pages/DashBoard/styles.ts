import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100vw;
  @media (min-width: 800px) {
    height: 100vh;
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
  height: 100%;
`;
export const Main = styled.div`
  padding: 1.4rem 6rem;
  flex: 1;
  height: 100%;
`;
