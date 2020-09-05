import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  background-color: var(--commum-nav);
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8.6rem;
  z-index: 10;
  .header-navbar {
    display: none;
  }
  .nav-bar {
    list-style: none;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

    justify-content: space-around;

    li {
      pointer-events: auto;

      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition-speed);

      a {
        width: 100%;

        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--commum-text);
        &:hover {
          background-color: var(--commum-nav-selected);
          filter: grayscale(0%) opacity(1);
          .link-icon {
            color: var(--color-primary);
          }
        }
        .icon-container {
          .link-icon {
            transition: var(--transition-speed);
            width: 2.4rem;
            height: 2.4rem;
          }
        }
        .link-text {
          font: 200 1.4rem Poppins;
          color: var(--commum-border);
        }
      }
    }
  }
  @media only screen and (min-width: 900px) {
    position: relative;

    width: var(--normal-aside-width);
    height: 100vh;
    flex-direction: column;
    transition: var(--transition-speed) width;
    ul {
      pointer-events: auto;
    }

    .header-navbar {
      display: flex;
      background-color: var(--commum-nav-selected);
      width: 100%;
      align-items: center;
      flex-direction: row-reverse;
      margin-bottom: 2.4rem;
      .icon-container {
        width: var(--normal-aside-width);
        .link-icon {
          width: var(--normal-aside-width);
          height: var(--normal-aside-width);
          padding: 2.4rem;
          transition: var(--transition-speed);
        }
      }
      .title {
        font-family: 'Acme';
        font-weight: 400;
        font-size: 2.4rem;
        color: var(--commum-background);
      }
      svg {
        transform: rotate(180deg);
        path {
          fill: var(--commum-text);
        }
      }
      a {
        flex-direction: row-reverse;
      }
    }
    .nav-bar {
      flex-direction: column;
      justify-content: none;

      li {
        height: 6rem;
        width: 100%;
        display: flex;
        flex: none;

        &:last-child {
          margin-top: auto;
          margin-bottom: 1.6rem;
        }

        &:hover {
          background-color: var(--commum-nav-selected);
          filter: grayscale(0%) opacity(1);
          a {
            .icon-container {
              .link-icon {
                color: var(--color-primary);
              }
            }
            .link-text {
              font: 400 1.6rem Poppins;
              color: var(--commum-background);
            }
          }
        }
        a {
          justify-content: flex-start;
          flex-direction: row;
          color: var(--commum-disabled);
          .icon-container {
            width: var(--normal-aside-width);
            display: inline-block;
            .link-icon {
              width: var(--normal-aside-width);
              height: var(--normal-aside-width);
              padding: 2.4rem;
              transition: var(--transition-speed);
              color: var(--commum-input-text);
            }
          }
          .link-icon {
            padding: 1.9rem;
          }
          .link-text {
            display: none;
          }
        }
      }
    }
    &:hover {
      width: var(--hovered-aside-width);
      .nav-bar .link-text {
        display: block;
        width: 100%;
        font: 200 1.4rem Poppins;
        color: var(--commum-disabled);
      }

      .header-navbar {
        svg {
          transform: rotate(180deg);
          transform: rotate var(--transition-speed);
          path {
            fill: var(--color-primary);
          }
        }
      }
    }
  }
  pointer-events: none;
`;
