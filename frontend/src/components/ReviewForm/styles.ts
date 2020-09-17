import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 2.4rem;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    .do-review {
      margin-bottom: 1.6rem;
      font: 700 1.6rem Poppins;
    }
    input {
      padding: 1rem 0.6rem;
      border-color: var(--commum-border);
      border-radius: 0.4rem;
      border: none;
      margin-bottom: 1.4rem;
    }
    textarea {
      padding: 1rem 0.6rem;
      border-color: var(--commum-border);
      border-radius: 0.4rem;
      border: none;
      resize: none;
      min-height: 10rem;
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1.6rem;

      button {
        flex: 0.5;
        height: 3.6rem;
        border-radius: 0.4rem;
      }
      .custumer-rating {
        svg {
          fill: #dadada;
          width: 2.8rem;
          height: 2.8rem;
        }
      }
    }
  }
`;
