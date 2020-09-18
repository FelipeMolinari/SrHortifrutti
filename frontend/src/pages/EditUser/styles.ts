import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 14rem;
`;
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
  flex-direction: column;
  display: flex;
  flex: 1;
  width: 100%;

  .buttons {
    margin-top: 1.4rem;
    button {
      margin-bottom: 1.8rem;
      margin-left: 1.8rem;
      &:first-child {
        margin: 0;
      }
    }
    display: flex;
  }
  @media (min-width: 800px) {
    .buttons {
      width: 40%;
    }
  }
`;

export const FieldsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  @media (min-width: 800px) {
    display: grid;
    flex: 1;

    grid-template:
      'loja  endereco '
      'contato  endereco ';
    grid-template-columns: 1fr 1fr;

    grid-column-gap: 6rem;
    .ul-loja {
      grid-area: loja;
    }
    .ul-contato {
      grid-area: contato;
    }
    .ul-endereco {
      grid-area: endereco;
    }
  }
  .title {
    margin-left: 1.4rem;
    font: 200 1.9rem Poppins;
    letter-spacing: 0.6rem;
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
  .ul-loja {
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      .avatar_editor {
        flex: 0;
      }
    }
  }
  .ul-contato {
    margin: 2.4rem 0rem;
  }
`;

export const AvatarContainer = styled.div`
  &:hover {
    opacity: 5;
  }
  input {
    width: 100%;
    height: 100%;
  }
`;
