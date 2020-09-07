import React, { useState, forwardRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import InputBlock from '../InputBlock';
import { NormalInputProps } from '../../typescriptInterface';

const InputPassword = forwardRef<HTMLInputElement, NormalInputProps>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }
  const { name, placeholder, type, password } = props;
  return (
    <InputBlock
      {...{ name, placeholder, password }}
      type={isVisible ? 'text' : 'password'}
      ref={ref}
    >
      {isVisible ? (
        <AiOutlineEyeInvisible size={18} onClick={() => toggleVisibility()} />
      ) : (
        <AiOutlineEye size={18} onClick={() => toggleVisibility()} />
      )}
    </InputBlock>
  );
});
export default InputPassword;
