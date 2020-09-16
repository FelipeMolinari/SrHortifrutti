import React from 'react';

import { Container, BlackDrop } from './styles';

const HeaderBottom: React.FC = ({ children }) => {
  return (
    <Container>
      <BlackDrop />
      {children}
    </Container>
  );
};

export default HeaderBottom;
