import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  width: 100%;
  flex: 1;
  justify-content: center;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .store-name {
      margin-top: 1rem;
      font: 600 2.8rem Poppins;
      color: var(--commum-card);
      span {
        font: 600 2.2rem Poppins;
      }
    }
    .line {
      display: flex;
      flex-direction: column;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 0.6rem;

      .dot {
        align-self: center;
        width: 0.6rem;
        height: 0.6rem;
        background-color: var(--commum-card);
        border-radius: 50%;
        margin: 0rem 0.6rem;
      }
      svg {
        margin-right: 0.6rem;
        fill: var(--commum-card);
        width: 2.4rem;
        height: 2.4rem;
      }
      span {
        font: 500 1.6rem Poppins;
        color: var(--commum-card);
      }
    }
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  .section-title {
    font: 600 2.4rem Poppins;
    margin-top: 1.2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #333;
    width: 100%;
    color: var(--color-secundary-text);
    margin-bottom: 2rem;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  .empty-store {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    img {
      width: 30rem;
    }
  }
`;
export const GridContainer = styled.div`
  width: 100%;

  justify-content: center;
  flex-direction: column;

  @media (min-width: 300px) {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, 17rem);
    > div {
      margin: 0;
    }
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .div-welcome {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (min-width: 800px) {
      display: grid;
      width: 80%;
      grid-template-columns: 1fr 1fr;
      align-content: center;
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  .content-review {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
      justify-items: center;
      #form-review {
        width: 80%;
        height: 100%;
      }
    }
  }
`;
