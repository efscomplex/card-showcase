import React from 'react'
import styled from 'styled-components'
import { Btn, useModal, Card } from 'lib'
import { Tiendeo } from 'presentators/request/Tiendeo'
import { ImCross } from 'react-icons/im'
import { useStore } from 'www/services/providers/Store'
import CardForm from './CardForm'
import { IoCloseCircleOutline } from 'react-icons/io5'

type CardProps = {
	title: string
	description: string
	imageUrl: string
	id: string
}
const CardView: React.FC<CardProps> = (props) => {
	const { setCards } = useStore()
	const Modal = useModal()

	const deleteCard = () => Tiendeo.instance().deleteCard(props.id, setCards)
	const updateCard = (e: any) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		Tiendeo.instance().updateCard(props.id, formData, (cards: any[]) => {
			Modal.close()
			setCards(cards)
		})
	}

	return (
		<Wrapper
			title={props.title}
			description={props.description}
			imgSrc={props.imageUrl}>
			<CardBtn onClick={deleteCard}>
				<IoCloseCircleOutline />
			</CardBtn>
			<Btn primary='var(--success)' onClick={Modal.open}>
				Edit
			</Btn>
			<Modal className='fade-in'>
				<CardForm
					handleOnSubmit={updateCard}
					title='Update Card'
					action='Update'
					context={props}
				/>
			</Modal>
		</Wrapper>
	)
}
const CardBtn = styled(Btn)`
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	color: var(--danger);
`
const Wrapper = styled(Card)`
	color: red;
	button {
		opacity: 0;
		transition: transform ease 0.25s;
		&:hover {
			opacity: 1;
		}
	}
`

export default CardView
