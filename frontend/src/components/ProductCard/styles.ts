import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	min-height: 20rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--commum-card);
	border-radius: 1rem;
	border: 1px solid var(--color-primary-text);
	&:hover {
		border-radius: 4rem;
		border-bottom-right-radius: 1rem;
		.content {
			border-radius: 4rem;
			border-bottom-right-radius: 1rem;
		}
	}
	transition: 0.5s border-radius;
	img {
		flex: 1;
	}
	.no-pointer-event {
		pointer-events: none;
	}
	.content {
		transition: 0.5s border-radius;

		position: relative;
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 1;
		background-color: var(--commum-card);
		padding: 1.8rem 1.4rem 0rem 1.4rem;
		border-radius: 1rem;
		overflow: hidden;
		cursor: pointer;
		.avatar-container {
			flex: 1;
			display: flex;
			align-items: center;
			padding: 2rem;
			align-items: flex-start;
			img {
				width: 100%;
			}
		}
		.admin-itens {
			cursor: pointer;
		}
		.delete-buttom {
			color: var(--color-delete);
			position: absolute;
			top: 2.4rem;
			right: 1rem;
		}

		.header-card {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			> div {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
			}
			.name {
				font: 600 1.6rem Poppins;
			}
			div {
				display: flex;
				justify-content: flex-start;
				.price {
					font: 600 1.2rem Poppins;
					margin-right: 0.8rem;
				}
				.unity {
					font: 400 1.2rem Poppins;
				}
			}
		}

		.footer-card {
			position: absolute;
			width: 4.3rem;
			height: 4.3rem;
			border: none;
			cursor: pointer;
			outline: none;
			bottom: 0;
			right: 0;
			border-top-left-radius: 1.4rem;

			display: flex;
			align-items: center;
			justify-content: center;
			transition: 0.2s transform;

			svg {
				width: 2rem;
				height: 2rem;
				z-index: 10;
			}
			&:hover {
				transform: scale(1.2);
				margin-bottom: 0.3rem;
				margin-right: 0.3rem;
				svg {
					color: var(--color-primary-text) !important;
				}
			}
		}
	}
`;
