import styled from 'styled-components';

export const Container = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 8.6rem;
	width: 100%;
	border-bottom: 1px solid var(--commum-disabled-text);
	&:last-child {
		border: 0;
	}
	.start {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex: 1.8;
		@media (min-width: 800px) {
			flex: 1;
		}
		img {
			width: 8rem;
			margin: 0rem 0.8rem;
		}
		.description-product {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			span {
				font: 200 1.6rem Poppins;
			}
			strong {
				font: 700 1.7rem Poppins;
			}
		}
	}
	.center {
		input {
			border: none;
			text-decoration: none;
			width: 4rem;
			background-color: var(--commum-input);
		}
		span {
			margin-left: 0.8rem;
			font: 400 1.6rem Poppins;
		}
	}
	.end {
		display: flex;
		align-items: center;
		flex: 1;
		justify-content: flex-end;
		strong {
			margin-right: 0.8rem;
			font: 700 1.6rem Poppins;
		}
		svg {
			width: 2rem;
			height: 2rem;
			cursor: pointer;
		}
	}
`;
