import styled from 'styled-components';
import background from '../../assets/images/background.png';

const BackgroundDropDown = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.07;
`;
export default BackgroundDropDown;
