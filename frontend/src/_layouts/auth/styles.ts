import styled from 'styled-components';
import background from '../../assets/images/background.png';

export const Wrapper = styled.div`
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

export const LandingAside = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--commum-card);
  min-height: calc(100vh * 0.6);
  position: relative;
  .content {
    z-index: 1;
    padding: 1.2rem 2.4rem 2.4rem 2.4rem;

    height: calc(100% - 6rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo-title {
    font-family: 'DM serif display';
    font-weight: 400;
    font-size: 6.4rem;
    color: var(--color-tittle);
  }
  .logo-complement {
    margin-top: 1.6rem;
    max-width: 250px;
    font: 400 1.8rem Poppins;
    color: var(--color-secundary-text);
    text-align: left;
    align-self: flex-start;
  }
  .landing-image {
    width: 250px;
    height: 250px;
  }
`;

export const LandingMain = styled.div`
  width: 100%;
  border-top-right-radius: 6rem;
  border-top-left-radius: 6rem;
  background-color: var(--commum-card);
  margin-top: -1.6rem;
  display: flex;
  padding: 4.6rem 0rem;
  justify-content: center;
  min-height: calc(100vh * 0.6);
  align-items: flex-start;
  overflow: hidden;
  z-index: 10;
  @media (min-width: 800px) {
    align-items: center;
    border-top-right-radius: 0rem;
    border-top-left-radius: 0rem;
  }
`;

export const BackgroundDropDown = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.07;
`;
