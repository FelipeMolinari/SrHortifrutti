import styled from 'styled-components';
import background from '../../assets/images/background.png';
export const Container = styled('div')`
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
    font-family: 'Acme';
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

export const BackgroundDropDown = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.07;
`;
