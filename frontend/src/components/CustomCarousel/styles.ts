import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  .slider-dots {
    svg {
      fill: #000;

      margin: 0.3rem;
    }
  }

  .slider-button {
    border-radius: 2rem;
    height: 4rem;
  }
`;
export const ImageContainer = styled.div<ImgHTMLAttributes<HTMLImageElement>>`
  width: 100%;
  height: 22rem;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media (min-width: 900px) {
    height: 44rem;
  }
`;
