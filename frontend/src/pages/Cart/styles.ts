import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	.header {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		.cart-title {
			margin-left: 1.4rem;
			font: 400 1.8rem Poppins;
		}
		svg {
			width: 2.4rem;
			height: 2.4rem;
		}
	}
`;
export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	@media (min-width: 800px) {
		flex-direction: row;
	}
	.footer-cart {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-top: 1.4rem;
	}
`;

export const ProductsCartList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin-top: 2.4rem;
	flex: 1;
	padding: 0rem 2rem;

	@media (min-width: 800px) {
		padding: 0rem 6rem 0rem 0rem;
	}
`;

export const ContactBox = styled.div`
	width: 20rem;
	height: 20rem;
	background-color: black;
`;
