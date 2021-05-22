import React from 'react'
import styled from 'styled-components'

type BtnProps = {
	label?: string
	icon?: React.FC<any>
	[key: string]: any
}
export const Btn: React.FC<BtnProps> = ({
	label,
	icon: I,
	children,
	...props
}) => {
	return (
		<Button {...props}>
			{I && <I style={{ marginRight: '10px' }} />}
			{children || label}
		</Button>
	)
}

const btnCss = ({ ghost, primary }: any) => `
    color:${ghost ? '#fff' : primary || 'var(--primary)'};
    background-color: ${ghost ? primary || 'var(--primary)' : '#fff'};
    border:1px solid ${ghost ? '#fff' : primary || 'var(--primary)'};
`

const Button = styled('button')`
	padding: 0.4rem 0.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;

	/* border: 1px solid var(--primary);
	background-color: transparent;
	color: var(--primary); */
	${btnCss}
	cursor: pointer;
	transition: transform 0.1s ease;

	&:hover {
		${({ ghost, primary }: any) => btnCss({ ghost: !ghost, primary })}
	}
	&:active {
		transform: scale(0.9);
	}
`

export default Btn
