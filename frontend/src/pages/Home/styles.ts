import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding-bottom: 16rem;
  height: auto;
  @media (min-width: 800px) {
    flex: 1;
    max-height: 100vh;
    align-items: flex-start;
  }
`;
export const Content = styled.div`
  @media (min-width: 800px) {
    flex: 1;
    max-height: 100vh;
    width: 100%;
    display: grid;
    display: grid;
    grid-template-areas:
      'details chart'
      'review chart';
    grid-column-gap: 4rem;
    grid-row-gap: 2rem;
    .review {
      grid-area: review;
      margin: 0;
    }
    .details {
      grid-area: details;
      margin: 0;
    }
    .chart {
      grid-area: chart;
      margin: 0;
    }
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h1 {
    font-size: 3.6rem;
    color: var(--color-primary-text);
  }
  p {
    font-size: 1.6rem;
    max-width: 68rem;
    color: var(--color-secundary-text);
  }
  div {
    &:first-child {
      margin-bottom: 2.4rem;
    }
  }
`;
export const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const CardProductsDetails = styled.div`
  background-color: var(--commum-card);
  border-radius: 2rem;
  padding: 1.6rem 2.6rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.6rem;
  .card-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem;
    flex-direction: column;
  }
  .text-main {
    font: 700 1.8rem Poppins;
  }
`;

interface SquareProps {
  color: string;
}
export const Square = styled.div<SquareProps>`
  background-color: ${(props) => props.color};
  padding: 1.4rem;
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.6rem;
  margin: 0.4rem 0rem;
  span {
    font: 700 1.6rem Poppins;
  }
`;
