import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  width: 100%;
  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .logo-title {
      font-family: 'DM serif display';
      font-weight: 400;
      font-size: 3rem;
      line-height: 3rem;
      color: var(--color-tittle);
    }
    .logo-description {
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--commum-input-text);
    }
  }
  .shopping-cart {
    display: flex;
    align-items: center;

    span {
      font-weight: 400;
      font-size: 1.6rem;
      color: var(--color-secundary-text);
      display: none;
    }
    .icon-shopping-cart {
      position: relative;
      margin-left: 1.4rem;

      .circle {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        position: absolute;
        background-color: var(--color-primary-dark);
        margin-top: -0.9rem;
        margin-left: -0.6rem;
      }
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  @media (min-width: 600px) {
    .logo {
      .logo-title {
        font-size: 3.4rem;
        line-height: 3.4rem;
      }
      .logo-description {
        font-size: 1.2rem;
      }
    }
    .shopping-cart {
      span {
        display: block;
      }
    }
  }
`;
