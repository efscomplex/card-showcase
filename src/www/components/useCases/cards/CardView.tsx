import { Btn, Card, useModal } from 'lib'
import { Tiendeo } from 'presentators/request/Tiendeo'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import styled from 'styled-components'
import { useStore } from 'www/services/providers/Store'
import CardForm from './CardForm'

type CardProps = {
	title: string
	description: string
	imageUrl: string
	id: string
	[key: string]: any
}
const CardView: React.FC<CardProps> = (props) => {
	const { setCards } = useStore()
	const Modal = useModal()

	const deleteCard = () =>
		Tiendeo.instance()
			.deleteCard(props.id)
			.then((cards) => setCards(cards))
	const updateCard = (e: any) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const payload = {
			title: formData.get('title'),
			description: formData.get('description')
		}
		Tiendeo.instance()
			.updateCard(props.id, payload)
			.then((cards) => {
				Modal.close()
				setCards(cards)
			})
	}

	return (
		<Wrapper {...props} imgSrc={props.imageUrl} className='var-shadow'>
			<DeleteBtn onClick={deleteCard} primary='var(--danger)'>
				<IoCloseOutline />
			</DeleteBtn>
			<EditBtn primary='var(--success)' onClick={Modal.open}>
				Edit
			</EditBtn>
			<Modal className='fade-in'>
				<CardForm
					handleOnSubmit={updateCard}
					title='Update Card'
					action='update'
					context={props}
				/>
			</Modal>
		</Wrapper>
	)
}
const EditBtn = styled(Btn)`
	margin: 0 1rem 1rem auto;
	margin-bottom: 12px;
`
const DeleteBtn = styled(Btn)`
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	background-color: transparent;
	font-size: 1.2rem;
`
const cardWidth = 278
const cardImgRatio = 3 / 5
const Wrapper = styled(Card)<CardProps>`
	width: ${cardWidth}px;

	img {
		height: ${cardWidth * cardImgRatio}px;
	}

	&:hover {
		box-shadow: var(--box-shadow);
	}
	& button {
		opacity: 0;
		transition: opacity ease 0.25s;
	}
	&:hover button {
		opacity: 1;
	}
`

export default CardView
