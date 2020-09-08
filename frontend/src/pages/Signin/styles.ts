import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;

  .footer-acount-details {
    margin-top: 2rem;
    margin-bottom: 4rem;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    button {
      text-decoration: none;
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      justify-self: flex-end;
      cursor: pointer;
      transition: 0.3s color;
      &:disabled {
        color: var(--commum-disabled-text);
        cursor: none;
      }
      color: var(--color-secundary);
      span {
        font: 700 1.4rem Poppins;
        margin-right: 1.4rem;
      }
    }
  }
`;
