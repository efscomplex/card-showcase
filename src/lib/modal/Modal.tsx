import Btn from 'lib/Btn'
import React, { createContext, useContext, useState } from 'react'
import styled from 'styled-components'
import { IoCloseOutline } from 'react-icons/io5'

import './modalStyles'

const ModalContext = createContext<any>({})

type ModalProps = { show: boolean; setShow: Function }

const ModalWrapper: React.FC = ({ children }) => {
	const { show, setShow } = useContext(ModalContext)

	return show ? (
		<Wrap>
			<Content className='shadow'>
				{children}
				<CloseBtn onClick={() => setShow(false)}>
					<IoCloseOutline />
				</CloseBtn>
			</Content>
		</Wrap>
	) : null
}

const Modal: React.FC<ModalProps> = ({ show, setShow, children }) => {
	return (
		<ModalContext.Provider value={{ show, setShow }}>
			<ModalWrapper>{children}</ModalWrapper>
		</ModalContext.Provider>
	)
}
const Content = styled('div')`
	position: relative;
`

const Wrap = styled('div')`
	position: absolute;
	top: 0;
	z-index: 100;

	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: flex-start;

	background-color: rgba(10, 10, 10, 0.6);
	${Content} {
		padding: 1.4rem;
		margin-top: 30vh;

		border-radius: 4px;
		background-color: white;
	}
`
const CloseBtn = styled('button')`
	position: absolute;
	top: -2rem;
	right: -2rem;
	border: none;
	font-size: 2rem;
	background-color: transparent;
	cursor: pointer;
	color: #bec2c7;
`
export { Modal }
