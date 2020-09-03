import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LandingAside from '../../components/LandingAside';
import LandingMain from '../../components/LandingMain';
import ContainerMain from '../../components/ContainerMain';
import { FieldProps } from '../../typescriptInterface';
import { Container } from './styles';
import CustomButton from '../../components/CustomButton';
import Form from '../../components/Form';
const fields: FieldProps[] = [
	{
		name: 'email',
		type: 'email',
		placeholder: 'E-mail'
	}
];

const RetrievePassword: React.FC = () => {
	return (
		<ContainerMain>
			<LandingAside />
			<LandingMain>
				<Container>
					<Form
						name="Esqueceu a sua senha?"
						description="Não tem problema, vamos dar um jeito nisso!"
						fields={fields}
					/>

					<div className="footer-container">
						<CustomButton colorName="--color-primary">
							{/* disabled={!(watch('email') && watch('password'))} */}
							Enviar
						</CustomButton>
					</div>
				</Container>
			</LandingMain>
		</ContainerMain>
	);
};

export default RetrievePassword;
