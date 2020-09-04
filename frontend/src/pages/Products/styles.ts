import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h1 {
    font-size: 4.6rem;
  }
  p {
    font-size: 2.4rem;
    max-width: 68rem;
  }
  div {
    &:first-child {
      margin-bottom: 2.4rem;
    }
  }
`;
export const ProductGrid = styled.div`
  align-self: center;
  display: grid;
  flex: 1;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-gap: 4rem;
  align-items: center;
  justify-content: center;
`;

export const Scrollable = styled.div`
  margin: 6rem 0rem;
  width: 100%;
  padding: 1rem 6rem;
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1.6rem;
  }
  ::-webkit-scrollbar-track {
    border-radius: 6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-secundary);
    border-radius: 6rem;
    height: 2rem;
  }
`;
