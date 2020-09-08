import styled, { css } from 'styled-components';
import {
  AiOutlineEnvironment,
  AiOutlineShoppingCart,
  AiOutlineDollarCircle
} from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--commum-card);
  padding: 1.4rem 2.4rem;
  border-radius: 2rem;
  margin-bottom: 2.4rem;
  &:last-child {
    margin-bottom: 0rem;
  }
  cursor: pointer;
`;
export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.4rem;
  img {
    width: 8rem;
    height: 8rem;
  }
  .store-name {
    font: 800 1.8rem Poppins;
  }
`;

export const DatasList = styled.ul`
  list-style: none;
  width: 100%;
`;
const iconCSS = css`
  color: var(--commum-text);
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1.4rem;
`;

export const LocalIcon = styled(AiOutlineEnvironment)`
  ${iconCSS}
`;

export const ProductsQtdIcon = styled(AiOutlineShoppingCart)`
  ${iconCSS}
`;

export const AverageValueIcon = styled(AiOutlineDollarCircle)`
  ${iconCSS}
`;
