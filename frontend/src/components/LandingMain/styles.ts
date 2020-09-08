import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-top-right-radius: 6rem;
  border-top-left-radius: 6rem;
  background-color: var(--commum-card);
  margin-top: -1.6rem;
  display: flex;
  padding: 4.6rem 0rem;
  justify-content: center;
  min-height: calc(100vh * 0.6);
  align-items: flex-start;
  overflow: hidden;
  z-index: 10;
  @media (min-width: 800px) {
    align-items: center;
    border-top-right-radius: 0rem;
    border-top-left-radius: 0rem;
  }
`;
