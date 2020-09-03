import React from 'react';
import { Container, FieldsContainer } from './styles';
import { FormProps } from '../../typescriptInterface';
import InputPassword from '../InputPassword';
import InputBlock from '../InputBlock';
const Form: React.FC<FormProps> = ({ name, description, fields }) => {
	return (
		<Container>
			<h1 className="fom-title">{name}</h1>
			{description && <p className="form-description">{description}</p>}
			<FieldsContainer>
				{fields.map((field, index) => {
					const { name, placeholder, type, password } = field;
					return field.password ? (
						<li>
							<InputPassword {...{ name, placeholder, type, password }} key={index} />
						</li>
					) : (
						<li>
							<InputBlock {...{ name, placeholder, type, password }} key={index} />
						</li>
					);
				})}
			</FieldsContainer>
		</Container>
	);
};

export default Form;
