import styled from 'styled-components';

export const Container = styled.div``;
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

export const ContainerMain = styled.div`
  margin-bottom: 16rem;
  flex-direction: column;
  display: flex;
  @media (min-width: 800px) {
    margin-bottom: 0rem;
  }
  button {
    width: 50%;
    align-self: center;
  }
`;

export const FieldsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;

  .title {
    margin: 2.4rem 0rem 1.4rem 1.4rem;
  }
  ul {
    list-style: none;
    width: 100%;
    flex: 1;
    li {
      width: 100%;
      flex: 1;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;

    .ul-right {
      margin-left: 4rem;
    }
  }
`;
