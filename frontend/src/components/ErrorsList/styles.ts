import styled from 'styled-components';

export const Container = styled.ul`
	margin: 0.7rem 0rem;
	list-style-type: none;
	width: 100%;
	li {
		background: #ffe5e5;

		.error-message {
			color: var(--color-delete);
			font: 200 1.2rem Poppins;
			margin-left: 1.6rem;
		}
	}
`;
