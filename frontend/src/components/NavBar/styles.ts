import styled from 'styled-components';

export const Container = styled.nav`
  width: var(--normal-aside-width);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--commum-nav);
  transition: var(--transition-speed) width;
  position: fixed;
  &:hover {
    width: var(--hovered-aside-width);
    .link-text {
      display: block;
    }
    .logo {
      width: calc(var(--hovered-aside-width) * 0.5);
    }
  }
`;

export const HortifrutiDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(var(--hovered-aside-width) * 0.7);
  align-items: center;
  img {
    width: calc(var(--normal-aside-width) * 0.9);
    transition: 0.2s width;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex: 1;
  li {
    height: 7rem;
    width: 100%;
    display: flex;

    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
    &:last-child {
      margin-top: auto;
    }
    &:hover {
      background-color: var(--commum-nav-selected);
      filter: grayscale(0%) opacity(1);
      .link-icon {
        color: var(--color-primary);
      }
    }
    a {
      width: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--commum-background);
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

      .link-text {
        display: none;
        margin-left: 1rem;
        font: 200 1.6rem Poppins;
        letter-spacing: 0.2rem;
      }
    }
  }
`;
