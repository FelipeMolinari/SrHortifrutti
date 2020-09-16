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

export const ReviwCard = styled.div`
  align-self: center;
  padding: 4.6rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--commum-card);
  border-radius: 1rem;
  width: 40rem;

  h1 {
    font: 600 2.4rem Poppins;
    color: var(--color-secundary-text);
  }
  .average-rating {
    margin-top: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 1.6rem;
    border-radius: 3rem;
    background-color: #e8e8e8;
    svg {
      width: 2rem;
      height: 2rem;
      margin: 0rem 0.4rem;
      fill: #ffdf00;
    }
  }
  .average-text {
    margin-top: 0.4rem;
    font: 400 1.6rem Poppins;
    color: var(--commum-text);
  }
  .ratings-ul {
    margin-top: 2.4rem;
    width: 100%;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-top: 0.4rem;
      .star-number {
        font: 400 1.4rem Poppins;
        color: var(--color-secundary-dark);
      }
      .star-percentage {
        font: 200 1.4rem Poppins;
      }
    }
  }
  .footer {
    margin-top: 2.4rem;
    font: 400 1.4rem Poppins;
    color: var(--color-secundary-dark);
  }
`;

export const ReviewForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 40rem;
  align-self: center;
  margin-top: 2.4rem;

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
`;
