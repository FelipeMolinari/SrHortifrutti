import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  background-color: var(--commum-nav);
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8.6rem;

  .details-store {
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
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;

      justify-content: center;
      filter: grayscale(100%) opacity(0.7);
      transition: var(--transition-speed);

      &:hover {
        background-color: var(--commum-nav-selected);
        filter: grayscale(0%) opacity(1);
        .link-icon {
          color: var(--color-primary);
        }
      }
      a {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--commum-background);
        .icon-container {
          .link-icon {
            transition: var(--transition-speed);
            width: 2.4rem;
            height: 2.4rem;
          }
        }
        .link-text {
          font: 200 1.4rem Poppins;
        }
      }
    }
  }
  @media only screen and (min-width: 600px) {
    width: var(--normal-aside-width);
    height: 100vh;
    flex-direction: column;
    transition: var(--transition-speed) width;

    .details-store {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: calc(var(--hovered-aside-width) * 0.7);
      img {
        width: calc(var(--normal-aside-width) * 0.9);
        transition: 0.2s width;
      }
    }

    .nav-bar {
      flex-direction: column;
      justify-content: none;

      li {
        height: 7rem;
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
          .link-icon {
            color: var(--color-primary);
          }
        }
        a {
          justify-content: flex-start;
          flex-direction: row;

          .icon-container {
            width: var(--normal-aside-width);
            display: inline-block;
            .link-icon {
              width: var(--normal-aside-width);
              height: var(--normal-aside-width);
              padding: 1.9rem;
              transition: var(--transition-speed);
            }
          }
          .link-icon {
            padding: 1.9rem;
          }
          .link-text {
            display: none;
            margin-left: 1rem;
            font: 200 1.6rem Poppins;
            letter-spacing: 0.2rem;
          }
        }
      }
    }
    &:hover {
      width: var(--hovered-aside-width);
      .nav-bar .link-text {
        display: block;
      }
      .logo {
        width: calc(var(--hovered-aside-width) * 0.5);
      }
    }
  }
`;
