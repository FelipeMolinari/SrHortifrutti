import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4.2rem 3.2rem 3.2rem 4.2rem;
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
`;
