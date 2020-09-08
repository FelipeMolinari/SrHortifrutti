import styled from 'styled-components';

export const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-self: center;
  h1 {
    font-weight: 400;
  }
  .description {
    margin: 1.6rem 0rem;
  }
  .buttons-main {
    flex-direction: column;
    padding: 0rem 4rem;

    a {
      width: 100%;
      button {
        span {
          font: 400 1.6rem Archivo;
        }
      }
    }
  }
  .button {
    &:first-child {
      margin: 1.4rem 0rem;
    }
  }

  .button-child {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: start;
    svg {
      margin-left: 2.4rem;
      width: 2.4rem;
      height: 2.4rem;
    }
    span {
      position: absolute;
      left: 0;
      right: 0;
      font: 700 1.6rem 'Archivo';
    }
  }
`;
