import styled from 'styled-components';

export const Scrollable = styled.div`
  @media only screen and (min-width: 800px) {
    margin-bottom: 0rem;
  }

  max-height: 30rem;
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

export const Container = styled.div`
  flex: 1;
  background-color: var(--commum-card);
  border-radius: 2rem;
  padding: 1.6rem 2.6rem;
  margin-top: 2.4rem;
  width: 100%;
  ul {
    list-style: none;
    .no-reviews {
      border: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      li {
        font: 200 1.4rem Poppins;
      }
      span {
        font: 700 2.4rem Poppins;
      }
      img {
        width: 60%;
      }
    }
    li {
      border-bottom: 1px solid var(--commum-border);
      padding-bottom: 1.4rem;
      margin-bottom: 1.4rem;
      &:last-child {
        margin: 0;
      }
      .description {
        font: 200 1.4rem Poppins;
      }
      .name {
        font: 700 1.6rem Poppins;
      }
    }
  }
`;
