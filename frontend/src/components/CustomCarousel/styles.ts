import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
export const Container = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  width: 100%;
  .absolute {
    position: relative;
  }
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
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media (min-width: 900px) {
    height: 44rem;
  }
  position: relative;
`;

export const DeleteButton = styled(MdDelete)`
  width: 3rem;
  height: 3rem;
  fill: red;
  margin-right: 3rem;
`;
