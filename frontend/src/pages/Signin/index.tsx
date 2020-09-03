import React from 'react';
import LandingAside from '../../components/LandingAside';
import LandingMain from '../../components/LandingMain';
import ContainerMain from '../../components/ContainerMain';
import CustomButtom from '../../components/CustomButton';
import Form from '../../components/Form';

import { Container } from './styles';
import { FieldProps } from '../../typescriptInterface';

const fields: FieldProps[] = [
	{
		name: 'name',
		type: 'text',
		placeholder: 'Nome do Hortifrutti'
	},
	{
		name: 'cellphone',
		type: 'tel',
		placeholder: 'Telefone (Whatsapp)',
		pattern: '[0-9]{2}-[0-9]{4}-[0-9]{4}'
	},
	{
		name: 'cep',
		type: 'text',
		placeholder: 'CEP',
		pattern: '[0-9]{3}-[0-9]{2}-[0-9]'
	},
	{
		name: 'email',
		type: 'email',
		placeholder: 'E-mail'
	},

	{
		name: 'password',
		type: 'password',
		placeholder: 'Senha',
		password: true
	}
];

const Signin: React.FC = () => {
	return (
		<ContainerMain>
			<LandingAside />
			<LandingMain>
				<Container>
					<Form name="Cadastro" description="Preencha os dados abaixo para prosseguir!" fields={fields} />
					<CustomButtom colorName="--color-primary" style={{ marginTop: 36, marginBottom: 56 }}>
						<span>Concluir cadastro</span>
					</CustomButtom>
				</Container>
			</LandingMain>
		</ContainerMain>
	);
};

export default Signin;
