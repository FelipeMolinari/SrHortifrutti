import styled from 'styled-components';

export const Container = styled.div`
	width: 70%;
	.input-above {
		padding: 1.4rem 0rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		span {
			display: flex;
			align-items: center;
			font: 400 1.4rem Poppins;
			text-decoration: none;
			color: var(--commum-text);
		}
		a {
			font: 400 1.4rem Poppins;
			text-decoration: none;
			color: var(--commum-text);
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.footer-container {
		display: flex;
		flex-direction: column;
		button + button {
			margin-top: 1.4rem;
		}
		div {
			margin-top: 1.4rem;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			div {
				margin-top: 0rem;
				align-items: center;
				svg {
					fill: var(--color-secundary);
				}
			}
			span {
				font: 400 1.4rem Poppins;
				color: var(--commum-text);
				margin-right: 0.8rem;
				a {
					font: 700 1.4rem Poppins;
					color: var(--color-secundary);
					&:hover {
						color: var(--color-secundary-dark);
						text-decoration: underline;
						cursor: pointer;
					}
					display: block;
				}
			}
		}
	}
`;
