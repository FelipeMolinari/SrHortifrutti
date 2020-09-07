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
  img {
    flex: 1;
  }
  .no-pointer-event {
    pointer-events: none;
  }
  .content {
    position: relative;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    background-color: var(--commum-card);
    padding: 1.8rem 1.4rem 0rem 1.4rem;
    border-radius: 2rem;
    overflow: hidden;
    cursor: pointer;
    .avatar-container {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 2rem;
      align-items: flex-start;
      img {
        width: 100%;
      }
    }
    .admin-itens {
      cursor: pointer;
    }
    .delete-buttom {
      color: var(--color-delete);
      position: absolute;
      top: 2.4rem;
      right: 1rem;
    }

    .header-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .name {
        font: 700 1.4rem Poppins;
      }
      .unity {
        font: 400 1.2rem Poppins;
      }
    }

    .footer-card {
      position: absolute;

      width: 5rem;
      height: 4rem;

      border: 1px solid #fff;
      bottom: 0;
      right: 0;
      border-top-left-radius: 2rem;
      margin-bottom: -0.5rem;
      margin-right: -0.5rem;
    }
    .price {
      font: 700 1.4rem Poppins;
    }
  }
`;
