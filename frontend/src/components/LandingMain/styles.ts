import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-top-right-radius: 2.4rem;
  border-top-left-radius: 2.4rem;
  background-color: var(--commum-background);
  margin-top: -1.6rem;
  display: flex;
  justify-content: center;
  min-height: calc(100vh * 0.5);
  align-items: flex-start;
  @media (min-width: 800px) {
    align-items: center;
  }
`;
