import styled from 'styled-components';

export const Container = styled.div`
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
    .average-span {
      margin-left: 1.4rem;
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
