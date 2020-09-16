import styled from 'styled-components';
import background from '../../assets/images/back2.png';
export const Container = styled.div`
  border-radius: 2rem;
  position: relative;
  width: 100%;
  height: 26rem;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const BlackDrop = styled.div`
  position: absolute;
  opacity: 0.6;
  background: #232323;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
