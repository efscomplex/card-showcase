import { Btn } from 'lib'
import styled from 'styled-components'

export const Content = styled('div')`
	position: relative;
`

export const Wrap = styled('div')`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;

	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: flex-start;

	background-color: rgba(10, 10, 10, 0.6);

	${Content} {
		margin-top: 30vh;

		border-radius: 4px;
		background-color: white;
	}
`
export const CloseBtn = styled(Btn)`
	position: absolute;
	top: -3rem;
	right: -3rem;
	border: none;
	font-size: 2rem;
	background-color: transparent;
`
