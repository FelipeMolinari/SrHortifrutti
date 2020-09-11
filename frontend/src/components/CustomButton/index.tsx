import React from 'react';
import { Container } from './styles';
import { ButtonInterface } from '../../typescriptInterface';

const CustomButtom: React.FC<ButtonInterface> = ({
  colorName,
  onPress,
  children,
  ...rest
}) => {
  return (
    <Container {...rest} colorName={colorName}>
      {children}
    </Container>
  );
};
export default CustomButtom;
