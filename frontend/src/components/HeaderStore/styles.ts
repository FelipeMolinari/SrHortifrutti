import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 1rem;
	width: 100%;
	.logo {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		.logo-title {
			font-family: 'DM serif display';
			font-weight: 400;
			font-size: 3rem;
			line-height: 3rem;
			color: var(--color-tittle);
		}
		.logo-description {
			font-weight: 400;
			font-size: 1.1rem;
			color: var(--commum-input-text);
		}
	}
	.actived {
		.shopping-cart {
			background-color: var(--color-primary);

			span {
				color: var(--commum-background);
			}
			.icon-shopping-cart {
				svg {
					color: var(--commum-background);
				}
			}
		}
	}
	a {
		text-decoration: none;
		color: unset;

		.shopping-cart {
			display: flex;
			align-items: center;
			padding: 0 1.4rem;
			border-radius: 0.4rem;

			span {
				font-weight: 400;
				font-size: 1.6rem;
				color: var(--color-secundary-text);
			}

			.icon-shopping-cart {
				position: relative;
				margin-left: 1.4rem;
				.circle {
					width: 2rem;
					height: 2rem;
					border-radius: 50%;
					position: absolute;
					background-color: var(--color-primary-dark);
					margin-top: -1rem;
					margin-left: -1rem;
					z-index: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					span {
						font: 700 1.2rem Poppins;
						color: var(--commum-background);
					}
				}

				svg {
					width: 2.4rem;
					height: 2.4rem;
					color: var(--color-secundary-text);
				}
			}
		}
	}

	@media (min-width: 600px) {
		.logo {
			.logo-title {
				font-size: 3.4rem;
				line-height: 3.4rem;
			}
			.logo-description {
				font-size: 1.2rem;
			}
		}
	}
`;
