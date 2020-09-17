import React from 'react';

import { Container } from './styles';
import { ListErrorsProps } from '../../typescriptInterface';

const ErrorsList: React.FC<ListErrorsProps> = ({ errorArray }) => {
  function renderErrors() {
    return (
      <Container>
        {errorArray.map((error, index) => {
          return (
            <li key={index}>
              <span className="error-message">{error.message}</span>
            </li>
          );
        })}
      </Container>
    );
  }
  return errorArray.length !== 0 ? renderErrors() : null;
};

export default ErrorsList;
