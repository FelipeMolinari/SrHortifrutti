import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--commum-background);

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 0.55fr 0.45fr;
    grid-template-rows: 1fr;
    flex: 1;
    .landing-image {
      width: 350px;
      height: 350px;
    }
    .logo-title {
      font-size: 7rem;
    }
    .logo-complement {
      font-size: 1.8rem;
      max-width: 350px;
    }
  }
`;
