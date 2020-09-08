import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: 700px) {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, 32rem);
    > div {
      margin: 0;
    }
  }
`;
