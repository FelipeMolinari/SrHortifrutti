import React from 'react';
import { useForm } from 'react-hook-form';

import CustomButtom from '../../components/CustomButton';
import Form from '../../components/Form';
import { Container } from './styles';

import InputBlock from '../../components/InputBlock';

import validCEP from '../../services/cepvalidation';
import ErrorsList from '../../components/ErrorsList';
import InputPassword from '../../components/InputPassword';
const Signup: React.FC = () => {
  const { errors, register, handleSubmit, watch, setValue } = useForm();
  async function handleOnBlue(event: React.FocusEvent<HTMLInputElement>) {
    const data = await validCEP(event.currentTarget.value);
    if (data.error) {
    } else {
      setValue('city', data.localidade);
      setValue('neighborhood', data.bairro);
      setValue('street', data.logradouro);
    }
  }

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    console.log(email, password);
  });

  return (
    <Container>
      <Form
        name="Cadastro"
        description="Preencha os dados abaixo para prosseguir!"
        id="form-Signup"
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
                required: true
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
                required: true,
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
              ref={register({
                required: true,
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
              ref={register}
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
              ref={register}
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
              ref={register}
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
              ref={register}
            />
          </li>
          <li>
            <InputBlock
              {...{
                name: 'number',
                type: 'number',
                placeholder: 'numero'
              }}
              defaultValue=""
              ref={register}
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

      <CustomButtom
        type="submit"
        form="form-signup"
        colorName="--color-primary"
        style={{ marginTop: 36, marginBottom: 56 }}
        disabled={
          !(
            watch('cep') &&
            watch('neighborhood') &&
            watch('street') &&
            watch('number') &&
            watch('name') &&
            watch('cellphone') &&
            watch('email') &&
            watch('password')
          )
        }
      >
        <span>Concluir cadastro</span>
      </CustomButtom>
    </Container>
  );
};

export default Signup;
