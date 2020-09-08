import React from 'react';
import InputBlock from '../InputBlock';
import InputPassword from '../InputPassword';
import { FormAccount } from '../../typescriptInterface';
const AccountForm: React.FC<FormAccount> = ({
  register,
  name,
  cellphone,
  email,
  password
}) => {
  return (
    <ul>
      <li>
        <InputBlock
          {...{
            name: 'name',
            type: 'text',
            placeholder: 'Nome do Hortifrutti'
          }}
          ref={register}
        />
      </li>
      <li>
        <InputBlock
          {...{
            name: 'cellphone',
            type: 'tel',
            placeholder: 'Telefone (Whatsapp)',
            mask: '(99) 99999-9999'
          }}
          ref={register}
        />
      </li>

      <li>
        <InputBlock
          {...{
            name: 'email',
            type: 'email',
            placeholder: 'E-mail'
          }}
          ref={register}
        />
      </li>
      <li>
        <InputPassword
          {...{
            name: 'password',
            type: 'password',
            placeholder: 'Senha',
            password: true
          }}
          ref={register}
        />
      </li>
    </ul>
  );
};

export default AccountForm;
