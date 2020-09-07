import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h1 {
    font-size: 3.6rem;
    color: var(--color-primary-text);
  }
  p {
    font-size: 1.6rem;
    max-width: 68rem;
    color: var(--color-secundary-text);
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
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-gap: 1.6rem;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: unset;
  }
`;

export const Scrollable = styled.div`
  margin-bottom: 12rem;
  @media only screen and (min-width: 800px) {
    margin-bottom: 0rem;
  }
  height: 100%;
  padding: 2rem 0rem;
  width: 100%;
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
