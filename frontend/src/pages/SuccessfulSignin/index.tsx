import React from 'react';
import { useHistory } from 'react-router-dom';
import feito from '../../assets/images/feito.png';
import { Container, CenteredContent } from './styles';
import CustomButtom from '../../components/CustomButton';
import BackgroundDropDown from '../../components/BackgroundDropDown/styles';

const SuccessfulSignin: React.FC = () => {
  const history = useHistory();
  function handleOnCLick() {
    history.push('login');
  }
  return (
    <Container>
      <BackgroundDropDown />
      <CenteredContent>
        <img src={feito} alt="Cadastro concluído"></img>
        <h1>Cadastro concluído</h1>
        <p>
          Agora você também tem o SeuHortifruti, faça o logIn com os dados fornecidos e
          cadastre todos os seus produtos!
        </p>
        <CustomButtom colorName="--color-primary" onClick={handleOnCLick}>
          Fazer login
        </CustomButtom>
      </CenteredContent>
    </Container>
  );
};

export default SuccessfulSignin;
