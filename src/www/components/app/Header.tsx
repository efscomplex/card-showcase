import { Btn, Text, useModal } from 'lib'
import { Tiendeo } from 'infrastructure/request/Tiendeo'
import React from 'react'
import { IoAddSharp } from 'react-icons/io5'
import styled from 'styled-components'
import { useStore } from 'www/services/providers/Store'
import CardForm from '../useCases/cards/CardForm'
import useCardRequest from 'www/services/hooks/useCardRequest'

export default () => {
	const { createCard, Modal } = useCardRequest()

	return (
		<Header>
			<Text.Title>Tiendeo Frontend Cards API</Text.Title>
			<Btn icon={IoAddSharp} onClick={Modal.open}>
				Add card
			</Btn>
			<Modal className='fade-in'>
				<CardForm handleOnSubmit={createCard} />
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
