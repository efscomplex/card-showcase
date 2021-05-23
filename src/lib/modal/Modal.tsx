import React, { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { IoCloseOutline } from 'react-icons/io5'
import { Wrap, CloseBtn, Content } from './styledModal'

const ModalContext = createContext<any>({})

const ModalWrapper: React.FC<any> = ({ children, ...props }) => {
	const { isVisible, setIsVisible } = useContext(ModalContext)

	return isVisible ? (
		<Wrap>
			<Content {...props}>
				{children}
				<CloseBtn
					primary='var(--danger)'
					onClick={() => setIsVisible(false)}>
					<IoCloseOutline />
				</CloseBtn>
			</Content>
		</Wrap>
	) : null
}

const useModal = () => {
	const [isVisible, setIsVisible] = useState(false)

	const Modal: any = ({ children, ...props }: any) => {
		const modalJsx = (
			<ModalContext.Provider value={{ isVisible, setIsVisible }}>
				<ModalWrapper {...props}>{children}</ModalWrapper>
			</ModalContext.Provider>
		)
		return createPortal(modalJsx, document.body)
	}
	Modal.open = () => setIsVisible(true)
	Modal.close = () => setIsVisible(false)

	return Modal
}

export { useModal }
