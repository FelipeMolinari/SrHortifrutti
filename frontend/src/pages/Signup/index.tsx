import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import CustomButtom from '../../components/CustomButton';
import Form from '../../components/Form';
import { Container } from './styles';

import InputBlock from '../../components/InputBlock';

import validCEP from '../../services/cepvalidation';
import ErrorsList from '../../components/ErrorsList';
import InputPassword from '../../components/InputPassword';
import MainApi from '../../services/api/MainApi';
import { UserOwner } from '../../typescriptInterface';
const Signup: React.FC = () => {
  const [rejected, setRejected] = useState(false);
  const [rejectedMessage, setRejectedMessage] = useState('');
  const { errors, register, handleSubmit, setValue, setError, getValues } = useForm();
  const history = useHistory();
  async function handleOnBlue(event: React.FocusEvent<HTMLInputElement>) {
    const data = await validCEP(event.currentTarget.value);
    if (data.error) {
      setError('cep invalido', { message: 'CEP informado não consta nos registros' });
    } else {
      setValue('city', data.localidade);
      setValue('neighborhood', data.bairro);
      setValue('street', data.logradouro);
    }
  }

  const onSubmit = handleSubmit(async (data) => {
    const values = getValues(['city', 'street', 'neighborhood']);
    const { name, cellphone, email, cep, number, password } = data;
    const newUser: UserOwner = {
      ...{ name, cellphone, email, cep, number, password },
      ...values
    };
    try {
      await MainApi.createUser(newUser);

      history.push('/signupsucc');
    } catch (error) {
      setRejected(true);
      setRejectedMessage('Já existe um usuário com o email informado!');
    }
  });
  return (
    <Container>
      <Form
        name="Cadastro"
        description="Preencha os dados abaixo para prosseguir!"
        id="form-signup"
        onSubmit={onSubmit}
      >
        <ul>
          <li>
            <InputBlock
              {...{
                name: 'name',
                type: 'text',
                placeholder: 'Nome do Hortifrutti'
              }}
              ref={register({
                required: {
                  value: true,
                  message: 'Nome não definido'
                }
              })}
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
              ref={register({
                required: {
                  value: true,
                  message: 'Celular não definido'
                },
                pattern: {
                  value: /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/g,
                  message: 'Formato do celular inválido'
                }
              })}
            />
          </li>

          <li>
            <InputBlock
              {...{
                name: 'email',
                type: 'email',
                placeholder: 'E-mail'
              }}
              ref={register({
                required: {
                  value: true,

                  message: 'Email não definido' // <p>error message</p>
                }
              })}
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
              ref={register({
                required: {
                  value: true,
                  message: 'Senha não definida'
                },
                minLength: {
                  value: 6,
                  message: 'Sua senha deve possuir ao menos 6 caracteres!' // <p>error message</p>
                }
              })}
            />
          </li>
          <li>
            <InputBlock
              {...{
                name: 'cep',
                type: 'text',
                placeholder: 'CEP',
                mask: '99999-999'
              }}
              onBlur={(e) => handleOnBlue(e)}
              ref={register({
                required: {
                  value: true,

                  message: 'CEP é um campo obrigatório' // <p>error message</p>
                }
              })}
            />
          </li>
          <li>
            <InputBlock
              {...{
                name: 'city',
                type: 'text',
                placeholder: 'Cidade'
              }}
              disabled
              ref={register({
                required: {
                  value: true,

                  message: 'Cidade é um campo obrigatório' // <p>error message</p>
                }
              })}
            />
          </li>
          <li>
            <InputBlock
              {...{
                name: 'neighborhood',
                type: 'text',
                placeholder: 'Bairro'
              }}
              disabled
              ref={register({
                required: {
                  value: true,

                  message: 'Bairro é um campo obrigatório' // <p>error message</p>
                }
              })}
            />
          </li>
          <li>
            <InputBlock
              {...{
                name: 'street',
                type: 'text',
                placeholder: 'Rua'
              }}
              disabled
              ref={register({
                required: {
                  value: true,

                  message: 'Rua é um campo obrigatório' // <p>error message</p>
                }
              })}
            />
          </li>
          <li>
            <InputBlock
              {...{
                name: 'number',
                type: 'number',
                placeholder: 'numero'
              }}
              ref={register({
                required: {
                  value: true,

                  message: 'Falta definir o número' // <p>error message</p>
                }
              })}
            />
          </li>
        </ul>
      </Form>
      {errors && (
        <ErrorsList
          errorArray={Object.keys(errors).map(function (errorNamedIndex) {
            let error = errors[errorNamedIndex];
            return error;
          })}
        ></ErrorsList>
      )}
      {rejected && <h3 color="red">{rejectedMessage}</h3>}
      <CustomButtom
        type="submit"
        form="form-signup"
        colorName="--color-primary"
        style={{ marginTop: 36, marginBottom: 56 }}
      >
        <span>Concluir cadastro</span>
      </CustomButtom>
    </Container>
  );
};

export default Signup;
