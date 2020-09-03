import React from 'react';

import { Container } from './styles';

const ContainerMain: React.FC = ({children}) => {
  return <Container>
      {children}
    </Container>;
}

export default ContainerMain;