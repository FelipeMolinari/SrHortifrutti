import React from 'react';

import { Container } from './styles';
import { ListErrorsProps } from '../../typescriptInterface';

const ErrorsList: React.FC<ListErrorsProps> = ({ errorArray }) => {
  return (
    <Container>
      {errorArray.map((error) => {
        return (
          <li>
            <span className="error-message">{error.message}</span>
          </li>
        );
      })}
    </Container>
  );
};

export default ErrorsList;
