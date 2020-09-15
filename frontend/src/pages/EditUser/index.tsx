import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';

import ErrorsList from '../../components/ErrorsList';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';
import CustomButtom from '../../components/CustomButton';
import validCEP from '../../services/cepvalidation';
import { Container, Header, ContainerMain, FieldsContainer } from './styles';
import InputText from '../../components/InputText';
import { useAuth } from '../../contexts/AuthContext';

const EditUser: React.FC = () => {
  const { handleSubmit, register, errors, setValue } = useForm();
  const { user } = useAuth();
  // const [image, setImage] = useState('');
  const [wantEdit, setWantEdit] = useState(false);
  async function handleOnBlue(event: React.FocusEvent<HTMLInputElement>) {
    const data = await validCEP(event.currentTarget.value);

    if (data.error) {
    } else {
      setValue('city', data.localidade);
      setValue('neighborhood', data.bairro);
      setValue('street', data.logradouro);
    }
  }

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });
  return (
    <Container>
      <Header>
        <div>
          <h1>Edite seus dados.</h1>
          <p>Seus dados que serão apresentados na loja podem ser editados aqui!</p>
        </div>
      </Header>
      <ContainerMain className="main-add">
        <Form id="edit-user-form" onSubmit={onSubmit}>
          <FieldsContainer>
            <ul className="ul-loja">
              <span className="title">LOJA</span>
              <div>
                <li className="avatar_editor">
                  <Dropzone
                    onDrop={(acceptedFiles, fileRejections) => {
                      console.log(acceptedFiles);
                    }}
                    noDrag={!wantEdit}
                    noClick
                    noKeyboard
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()}>
                        <AvatarEditor
                          image="data:image/jpeg;base64,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"
                          width={110}
                          height={110}
                          border={0}
                          color={[255, 255, 255, 0.9]} // RGBA
                          scale={1.2}
                          rotate={0}
                          borderRadius={55}
                          disableDrop={!wantEdit}
                          position={{ x: 0, y: 0 }}
                        />
                        <input {...getInputProps()} />
                      </div>
                    )}
                  </Dropzone>
                </li>
                <ul className="datas">
                  <li>
                    <InputBlock
                      defaultValue={user?.name}
                      disabled={!wantEdit}
                      {...{
                        name: 'name',
                        type: 'text',
                        placeholder: 'Nome do Hortifrutti'
                      }}
                      ref={register({
                        required: {
                          value: true,
                          message: 'Campo {Nome Hortifruti} é obrigatório'
                        }
                      })}
                    />
                  </li>
                  <li>
                    <InputText
                      defaultValue={user?.description}
                      disabled={!wantEdit}
                      {...{
                        name: 'description',
                        type: 'text',
                        placeholder: 'Descrição da loja'
                      }}
                      ref={register({
                        required: false
                      })}
                      rows={4}
                    />
                  </li>
                </ul>
              </div>
            </ul>
            <ul className="ul-contato">
              <h3 className="title">Contato</h3>

              <li>
                <InputBlock
                  disabled={!wantEdit}
                  defaultValue={user?.cellphone}
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
                  defaultValue={user?.email}
                  disabled={!wantEdit}
                  {...{
                    name: 'email',
                    type: 'email',
                    placeholder: 'E-mail'
                  }}
                  ref={register({
                    required: {
                      value: true,
                      message: 'Campo {email} é obrigatório'
                    }
                  })}
                />
              </li>
            </ul>
            <ul className="ul-endereco">
              <h3 className="title">Endereço</h3>

              <li>
                <InputBlock
                  defaultValue={user?.cep}
                  disabled={!wantEdit}
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
                      message: 'Campo {CEP} é obrigatório'
                    }
                  })}
                />
              </li>
              <li>
                <InputBlock
                  defaultValue={user?.city}
                  {...{
                    name: 'city',
                    type: 'text',
                    placeholder: 'Cidade'
                  }}
                  disabled
                  ref={register({
                    required: {
                      value: true,
                      message: 'Campo {Cidade} é obrigatório'
                    }
                  })}
                />
              </li>
              <li>
                <InputBlock
                  defaultValue={user?.neighborhood}
                  {...{
                    name: 'neighborhood',
                    type: 'text',
                    placeholder: 'Bairro'
                  }}
                  disabled
                  ref={register({
                    required: {
                      value: true,
                      message: 'Campo {Bairro} é obrigatório'
                    }
                  })}
                />
              </li>
              <li>
                <InputBlock
                  defaultValue={user?.street}
                  {...{
                    name: 'street',
                    type: 'text',
                    placeholder: 'Rua'
                  }}
                  disabled
                  ref={register({
                    required: {
                      value: true,
                      message: 'Campo {Rua} é obrigatório'
                    }
                  })}
                />
              </li>
              <li>
                <InputBlock
                  defaultValue={user?.number}
                  disabled={!wantEdit}
                  {...{
                    name: 'number',
                    type: 'number',
                    placeholder: 'numero'
                  }}
                  ref={register({
                    required: {
                      value: true,
                      message: 'Campo {Numero} é obrigatório'
                    }
                  })}
                />
              </li>
            </ul>
          </FieldsContainer>
        </Form>
        <ErrorsList
          errorArray={Object.keys(errors).map(function (errorNamedIndex) {
            let error = errors[errorNamedIndex];
            return error;
          })}
        />
        <div className="buttons">
          <CustomButtom
            colorName="--color-primary"
            form="add-product-form"
            type="submit"
            disabled={wantEdit}
            onClick={() => setWantEdit(true)}
          >
            Habilitar Edição
          </CustomButtom>
          <CustomButtom
            colorName="--color-primary"
            form="edit-user-form"
            type="submit"
            disabled={!wantEdit}
          >
            Confirmar Edição
          </CustomButtom>
        </div>
      </ContainerMain>
    </Container>
  );
};

export default EditUser;
