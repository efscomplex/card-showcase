import styled from 'styled-components'

type InputProps = {
	help?: string
}
export const Input = styled('input')<InputProps>`
	width: 12rem;
	display: block;
	margin-bottom: 2rem;

	padding: 4px 0;

	border: none;
	border-bottom: 1px solid var(--primary, rgba(10, 10, 10, 0.9));
	&:focus {
		outline: none;
	}
	&:placeholder {
		color: inherit;
	}
	&:invalid {
		border-bottom: 1px solid var(--danger, red);
	}

	&:invalid:required {
		color: var(--danger, red);
	}
`
