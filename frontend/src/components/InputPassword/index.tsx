import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import InputBlock from '../InputBlock';
import { FieldProps } from '../../typescriptInterface';

const InputPassword: React.FC<FieldProps> = ({
  name,
  placeholder,
  type,
  password
}) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }
  return (
    <InputBlock
      {...{ name, placeholder, password }}
      type={isVisible ? 'text' : 'password'}
    >
      {isVisible ? (
        <AiOutlineEyeInvisible size={18} onClick={() => toggleVisibility()} />
      ) : (
        <AiOutlineEye size={18} onClick={() => toggleVisibility()} />
      )}
    </InputBlock>
  );
};
export default InputPassword;
