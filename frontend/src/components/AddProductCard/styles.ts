import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  --width-card: 17rem;
  --height-card: 22rem;
  width: var(--width-card);
  height: var(--height-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  background-color: var(--commum-card);
  cursor: pointer;
  .content {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    justify-content: space-around;
    background-color: var(--commum-card);
    padding: 2.4rem 1.8rem;
    border-radius: 2rem;
    svg {
      width: 50%;
      height: 30%;
    }
    &:hover {
      transform: translate(-0.5rem, -0.5rem);
      color: var(--color-secundary);
    }
    .footer-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      span {
        font: 700 2.1rem Poppins;
      }
    }
  }
  .circle {
    border-radius: 2rem;

    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-secundary);
    z-index: 0;
    top: 0;
  }
`;
