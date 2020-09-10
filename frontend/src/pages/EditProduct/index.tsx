import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import { Header, ContainerMain } from './styles';
import ContainerDashboardPages from '../../styles/components/ContainerDashboardPages';
import Form from '../../components/Form';
import InputBlock from '../../components/InputBlock';
import CustomButton from '../../components/CustomButton';
import ProductCard from '../../components/ProductCard';
import productMock from '../../util/productMock';
import { ProductProps } from '../../typescriptInterface';
import SweetAlert from 'react-bootstrap-sweetalert';
import { confirmStyle, successStyle, dangerStyle } from '../../styles/alertBrn';
import ErrorsList from '../../components/ErrorsList';

const AddProduct: React.FC = () => {
	const history = useHistory();
	const { errors, register, handleSubmit, watch } = useForm();
	const [ confirmBoth, setConfirmBoth ] = useState(false);
	const [ successDialog, setSuccessDialog ] = useState(false);
	const [ errorDialog, setErrorDialog ] = useState(false);
	const [ dialogTitle, setDialogTitle ] = useState('');
	const [ dialogDescription, setDialogDescription ] = useState('');

	const { id } = useParams();
	const initialProduct = productMock.filter((item) => item.id === parseInt(id))[0];
	const [ product, setProduct ] = useState<ProductProps>(initialProduct);
	useEffect(
		() => {
			const name = watch('name');
			const value = watch('value');
			setProduct({ ...product, ['name']: name, ['price']: value });
		},
		[ watch('name'), watch('value') ]
	);

	const onSubmit = handleSubmit((data) => setConfirmBoth(true));

	return (
		<ContainerDashboardPages>
			<Header>
				<AiOutlineArrowLeft onClick={() => history.goBack()} />
				<div>
					<h1>Editar Produto</h1>
					<p>Faça as modificações no seu produto!</p>
				</div>
			</Header>
			<ContainerMain className="main-add">
				<div className="left">
					<Form id="edit-product-form" onSubmit={onSubmit}>
						<ul>
							<li>
								<InputBlock
									defaultValue={initialProduct.name}
									{...{
										name: 'name',
										type: 'text',
										placeholder: 'Nome'
									}}
									ref={register({
										maxLength: {
											value: 20,
											message: 'Nome do produto excede o tamanho permitido. (10)!'
										}
									})}
								/>
							</li>

							<li>
								<InputBlock
									defaultValue={initialProduct.price}
									{...{
										name: 'value',
										type: 'text',
										mask: '99.99',
										placeholder: 'Valor'
									}}
									ref={register({
										pattern: {
											value: /[0-9]{2}.[0-9]{2}/,
											message: 'Preço do produto está em um formato incorreto!'
										}
									})}
								/>
							</li>
						</ul>
					</Form>
					<ErrorsList
						errorArray={Object.keys(errors).map(function(errorNamedIndex) {
							let error = errors[errorNamedIndex];
							return error;
						})}
					/>
					<CustomButton
						colorName="--color-primary"
						disabled={!(watch('name') && watch('value') && watch('product') !== '0')}
						form="edit-product-form"
						type="submit"
					>
						Editar
					</CustomButton>
				</div>
				<div className="right ">
					<ProductCard product={product} />
				</div>
			</ContainerMain>
			{confirmBoth && (
				<SweetAlert
					title="Tem certeza?"
					warning
					showCancel
					confirmBtnStyle={dangerStyle}
					confirmBtnText="Sim"
					cancelBtnText="Cancelar"
					cancelBtnStyle={successStyle}
					onConfirm={() => {
						setConfirmBoth(false);
						setSuccessDialog(true);
						setDialogTitle('Produto Editado');
						setDialogDescription('Seu produto foi alterado com sucesso!');
					}}
					onCancel={() => {
						setConfirmBoth(false);
						setErrorDialog(true);
						setDialogTitle('Cancelado');
						setDialogDescription('Seu produto não foi alterado');
					}}
				>
					Editar produto <strong>{initialProduct.name}</strong> para <strong>{watch('name')}</strong>
				</SweetAlert>
			)}

			{errorDialog && (
				<SweetAlert
					error
					title={dialogTitle}
					confirmBtnText="OK"
					confirmBtnStyle={confirmStyle}
					onConfirm={() => {
						setErrorDialog(false);
						history.goBack();
					}}
				>
					{dialogDescription}
				</SweetAlert>
			)}

			{successDialog && (
				<SweetAlert
					success
					title={dialogTitle}
					confirmBtnText="OK"
					confirmBtnStyle={confirmStyle}
					onConfirm={() => {
						setSuccessDialog(false);
						history.goBack();
					}}
				>
					{dialogDescription}
				</SweetAlert>
			)}
		</ContainerDashboardPages>
	);
};

export default AddProduct;
