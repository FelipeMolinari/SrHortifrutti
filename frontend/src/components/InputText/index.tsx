import React, { forwardRef } from 'react';
import { Container, TextArea } from './styles';
import { TextAreaProps } from '../../typescriptInterface';

const InputText = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ name, ...rest }, ref) => {
    return (
      <Container>
        <TextArea className="input-camp" name={name} {...rest} ref={ref} />
      </Container>
    );
  }
);
export default InputText;
