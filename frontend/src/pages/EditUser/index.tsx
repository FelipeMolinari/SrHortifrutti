import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AvatarEditor from 'react-avatar-editor';

import Dropzone from 'react-dropzone';
import defaultLogo from '../../assets/images/default-logo.png';
import ErrorsList from '../../components/ErrorsList';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';
import CustomButtom from '../../components/CustomButton';
import validCEP from '../../services/cepvalidation';
import {
  Container,
  Header,
  ContainerMain,
  FieldsContainer,
  AvatarContainer
} from './styles';
import InputText from '../../components/InputText';
import { useAuth } from '../../contexts/AuthContext';
import AuthorizedApi from '../../services/api/AuthorizedApi';
const EditUser: React.FC = () => {
  const { handleSubmit, register, errors, setValue, getValues, reset } = useForm();
  const { user, updateUser, rejectedUpdate, successUpdate } = useAuth();
  const [preview, setPreview] = useState('');
  const [image, setImage] = useState<File>();
  const [wantEdit, setWantEdit] = useState(false);

  useEffect(() => {
    if (user && user.avatar_url) {
      setPreview(user.avatar_url);
    } else {
      setPreview(defaultLogo);
    }
  }, []);
  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  async function handleOnBlue(event: React.FocusEvent<HTMLInputElement>) {
    const data = await validCEP(event.currentTarget.value);

    if (data.error) {
    } else {
      setValue('city', data.localidade);
      setValue('neighborhood', data.bairro);
      setValue('street', data.logradouro);
    }
  }

  function handleOnAccepted(file: File) {
    setImage(file);
  }
  const onSubmit = handleSubmit(async (data) => {
    try {
      let avatar_url;
      const { cellphone, cep, email, name, number, description } = data;
      const datas = {
        cellphone,
        cep,
        email,
        name,
        number,
        street: getValues('street'),
        city: getValues('city'),
        neighborhood: getValues('neighborhood'),
        description
      };
      if (image) {
        const data = new FormData();
        data.append('file', image!!, image.name);
        const avatarResponse = await AuthorizedApi.uploadAvatar(data);
        avatar_url = avatarResponse.url;

        updateUser({
          ...datas,
          number: parseInt(number),
          avatar_url
        });
        setImage(undefined);
      } else {
        updateUser({
          ...datas,
          number: parseInt(number),
          avatar_url: user?.avatar_url
        });
      }
    } catch (error) {
      console.log(error);
    }
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
                    accept="image/*"
                    onDropAccepted={(acceptedFiles, una) => {
                      handleOnAccepted(acceptedFiles[0]);
                    }}
                    multiple={false}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <AvatarContainer {...getRootProps()}>
                        <AvatarEditor
                          image={preview}
                          width={100}
                          height={100}
                          border={0}
                          color={[255, 255, 255]} // RGBA
                          scale={1}
                          rotate={0}
                          borderRadius={20}
                        />
                        <input {...getInputProps()} />
                      </AvatarContainer>
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
        {rejectedUpdate && <span>Erro ao atualizar o usuário!</span>}
        {successUpdate && (
          <span style={{ marginTop: 8, color: '#7BBF8E' }}>
            Usuário atualizado com sucesso!
          </span>
        )}

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
