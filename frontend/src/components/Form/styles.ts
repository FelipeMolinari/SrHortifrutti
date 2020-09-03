import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding: 6rem 0;

  .legend-form {
    font: 700 2.4rem Poppins;
    margin-bottom: 1.4rem;
  }
  .input-above {
    padding: 1.4rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      display: flex;
      align-items: center;
      font: 400 1.4rem Poppins;
      text-decoration: none;
      color: var(--commum-text);
    }
    a {
      font: 400 1.4rem Poppins;
      text-decoration: none;
      color: var(--commum-text);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .footer-container {
    display: flex;
    flex-direction: column;
    button + button {
      margin-top: 1.4rem;
    }
    div {
      margin-top: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      div {
        margin-top: 0rem;
        align-items: center;
        svg {
          fill: var(--color-secundary);
        }
      }
      span {
        font: 400 1.4rem Poppins;
        color: var(--commum-text);
        margin-right: 0.8rem;
        a {
          font: 700 1.4rem Poppins;
          color: var(--color-secundary);
          &:hover {
            color: var(--color-secundary-dark);
            text-decoration: underline;
            cursor: pointer;
          }
          display: block;
        }
      }
    }
  }
`;

export const FieldsContainer = styled.div`
  border-radius: 1.6rem;
  overflow: hidden;
  border: 1px solid var(--border);
  width: 100%;
`;
