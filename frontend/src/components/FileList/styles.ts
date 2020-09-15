import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    & + li {
      margin-top: 1.5rem;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.2rem;
      color: #999;
      margin-top: 0.5rem;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 0.5rem;
        cursor: pointer;
      }
    }
  }
`;
export const Preview = styled.div<ImgHTMLAttributes<HTMLImageElement>>`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 0.5rem;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 1rem;
`;
