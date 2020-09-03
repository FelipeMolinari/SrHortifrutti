import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  z-index: 1;
  img {
    width: 150px;
    height: 150px;
  }
  h1 {
    text-align: center;
  }
  p {
    margin: 2.4rem 0rem;
    text-align: center;
  }
  button {
    width: 50%;
  }

  @media (min-width: 800px) {
    width: 40%;
    button {
      width: 40%;
    }
  }
`;
