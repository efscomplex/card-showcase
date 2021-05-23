import styled from 'styled-components'

export const Wrap = styled('div')`
	position: relative;
	width: 20rem;

	border-radius: 4px;
`
export const Image = styled('img')<{ ref: any; src: string }>`
	width: 100%;
	height: auto;

	object-fit: cover;
	object-position: center;
`
export const Content = styled('div')`
	padding: 1rem;
	position: relative;
	&::before {
		position: absolute;
		content: '${(props) => props.title}';
		top: -2.2rem;
		left: 1rem;
		text-transform: capitalize;
		color: #fff;
		font-size: 1.4em;
		font-weight: bold;
	}
`
