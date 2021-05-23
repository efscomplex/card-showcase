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

	const getBlob = async (url: string) => {
		return await fetch(url).then((r) => r.blob())
		//return new File([blobImage], 'image', { type: 'image/png' })
	}
	const createNewCard = async (e: any) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const blob = await getBlob(formData.get('image') as string)
		formData.set('image', blob)
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
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	gap: 2rem;
`
