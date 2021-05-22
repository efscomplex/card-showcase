import { Btn, Text, useModal } from 'lib'
import { Tiendeo } from 'presentators/request/Tiendeo'
import React from 'react'
import { IoAddSharp } from 'react-icons/io5'
import styled from 'styled-components'
import { useStore } from 'www/services/providers/Store'
import CardForm from '../useCases/cards/CardForm'

export default () => {
	const Modal = useModal()
	const { setCards } = useStore()

	const createNewCard = (e: any) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		Tiendeo.instance().addCard(formData, (cards: any[]) => {
			Modal.close()
			setCards(cards)
		})
	}

	return (
		<Header>
			<Text.Title>Tiendeo Frontend Cards API</Text.Title>
			<Btn icon={IoAddSharp} onClick={Modal.open}>
				Add card
			</Btn>
			<Modal className='fade-in'>
				<CardForm handleOnSubmit={createNewCard} />
			</Modal>
		</Header>
	)
}

const Header = styled('header')`
	padding: 2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	gap: 2rem;
`
