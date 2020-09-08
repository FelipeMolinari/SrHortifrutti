import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import LandingAside from '../../components/LandingAside';
import LandingMain from '../../components/LandingMain';
import ContainerMain from '../../components/ContainerMain';
import CustomButtom from '../../components/CustomButton';
import Form from '../../components/Form';
import { FormAccount } from '../../typescriptInterface';
import { Container } from './styles';

import AccountForm from '../../components/AccountForm';
import InputBlock from '../../components/InputBlock';

import validCEP from '../../services/cepvalidation';
const Signin: React.FC = () => {
  const [cepForm, setCepForm] = useState(false);
  const [accountDetails, setAccountDetails] = useState<FormAccount>({
    cellphone: '',
    email: '',
    name: '',
    password: ''
  });
  const { errors, register, handleSubmit, watch, setValue } = useForm();
  const history = useHistory();
  async function handleOnBlue(event: React.FocusEvent<HTMLInputElement>) {
    const data = await validCEP(event.currentTarget.value);
    console.log(data);
    if (data.error) {
    } else {
      console.log(watch('city'));
      setValue('city', data.localidade);
      setValue('neighborhood', data.bairro);
      setValue('street', data.logradouro);
    }
  }
  function handleChangeForm() {
    setCepForm(true);
    const settedAccount = {
      name: watch('name'),
      cellphone: watch('cellphone'),
      email: watch('email'),
      password: watch('password')
    } as FormAccount;

    setAccountDetails(settedAccount);
  }
  function handleCLickEvent() {
    history.push('/signsucc');
  }
  return (
    <ContainerMain>
      <LandingAside />
      <LandingMain>
        <Container>
          <Form name="Cadastro" description="Preencha os dados abaixo para prosseguir!">
            {!cepForm ? (
              <AccountForm register={register} {...accountDetails} />
            ) : (
              <ul>
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
            )}
          </Form>

          {cepForm ? (
            <CustomButtom
              colorName="--color-primary"
              style={{ marginTop: 36, marginBottom: 56 }}
              disabled={
                !(
                  watch('cep') &&
                  watch('neighborhood') &&
                  watch('street') &&
                  watch('number')
                )
              }
              onClick={handleCLickEvent}
            >
              <span>Concluir cadastro</span>
            </CustomButtom>
          ) : (
            <div className="footer-acount-details">
              <button
                onClick={() => handleChangeForm()}
                disabled={
                  !(
                    watch('name') &&
                    watch('cellphone') &&
                    watch('email') &&
                    watch('password')
                  )
                }
              >
                <span>Próximo</span>
                <AiOutlineArrowRight />
              </button>
            </div>
          )}
        </Container>
      </LandingMain>
    </ContainerMain>
  );
};

export default Signin;
