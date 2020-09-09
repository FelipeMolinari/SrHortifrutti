import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  a {
    width: 100%;

    text-decoration: none;
    button {
      background-color: var(--commum-input-text);
      margin: 1rem;
      &:hover {
        transform: none;
      }
    }
  }
  .actived {
    button {
      background-color: var(--color-primary);
    }
  }
  @media (min-width: 800px) {
    height: 100%;
    width: 25rem;
    justify-content: flex-start;
    margin-right: 1.6rem;
    flex-direction: column;
    button {
      margin: 0;
      margin-top: 1.6rem;
      &:hover {
        transform: none;
        opacity: 0.9;
      }
    }
  }
`;
