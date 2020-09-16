import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 3rem 6rem 3.2rem 6rem;
  background-color: var(--commum-background);
`;

export const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1.6rem;
`;
