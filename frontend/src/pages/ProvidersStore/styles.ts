import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;

  .top-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    .top-left {
      align-self: flex-start;
    }
    .search-input {
      margin: 2.4rem 0rem;
      width: 80%;
    }
  }

  @media (min-width: 900px) {
    .top-content {
      flex-direction: row;
      justify-content: space-between;
      padding: 0rem 3.8rem;
      width: 100%;
      .top-left {
        align-self: flex-start;
        margin-bottom: 2.4rem;
      }
      .search-input {
        margin: 0rem;
        width: unset;
      }
    }
  }
`;
export const GridContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  flex-direction: column;

  @media (min-width: 700px) {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, 32rem);
    > div {
      margin: 0;
    }
  }
`;
