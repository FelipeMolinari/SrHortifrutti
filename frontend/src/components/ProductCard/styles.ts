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
    .product-avatar {
      width: 70%;
    }
    .admin-itens {
      display: none;
      cursor: pointer;
    }
    .delete-buttom {
      color: var(--color-delete);
      position: absolute;
      top: 2.4rem;
      right: 1.6rem;
    }
    &:hover {
      transform: translate(-0.5rem, -0.5rem);
      .admin-itens {
        display: flex;
        width: 2rem;
        height: 2rem;
      }
    }
    .footer-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      > div {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .name {
        font-size: 1.4rem;
      }
    }
    .price {
      font: 700 1.8rem Poppins;
    }
  }
  .circle {
    border-radius: 2rem;

    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffaaaa;
    z-index: 0;
    top: 0;
  }
`;
