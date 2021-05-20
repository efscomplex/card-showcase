import { Btn, Text, Modal } from 'lib'
import React, { useState } from 'react'
import styled from 'styled-components'
import { IoAddSharp } from 'react-icons/io5'
import CardForm from '../shared/CardForm'

export default () => {
	const [showModal, setShowModal] = useState(false)
	return (
		<Header>
			<Text.Title>Tiendeo Frontend Cards AP</Text.Title>
			<Btn icon={IoAddSharp} onClick={() => setShowModal(true)}>
				Add card
			</Btn>
			<Modal show={showModal} setShow={setShowModal}>
				<CardForm setShowModal={setShowModal} />
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
