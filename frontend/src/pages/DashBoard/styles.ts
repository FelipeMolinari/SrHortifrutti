import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100vw;
  height: 100vh;
  --transition-speed: 0.2s;
  --normal-aside-width: 7rem;
  --hovered-aside-width: 24rem;
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  padding: 2.4rem 1.6rem;
  @media only screen and (min-width: 600px) {
    padding: 2.4rem 2.4rem 2.4rem calc(var(--normal-aside-width) * 1.6);
  }
`;
