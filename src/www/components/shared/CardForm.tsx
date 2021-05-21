import { Card, Text, Input, Btn } from 'lib'
import React from 'react'
import { Tiendeo } from 'presentators/request/Tiendeo'
import { useStore } from 'www/services/providers/Store'

const CardForm: React.FC<any> = ({ setShowModal }) => {
	const { setCards } = useStore()

	const callabckNewCard = async () => {
		const cards = await Tiendeo.instance().getCards()
		setCards(cards)
		setShowModal(false)
	}
	const addNewCard = (e: any) => {
		e.preventDefault()
		const formData = new FormData(e.target)

		Tiendeo.instance().addCard(formData).then(callabckNewCard)
	}
	return (
		<Card>
			<Text.Title>New card</Text.Title>
			<form
				onSubmit={addNewCard}
				style={{
					padding: '1rem 0 0',
					margin: '1rem',
					alignSelf: 'center'
				}}>
				<Input name='title' placeholder='Title' />
				<Input name='description' placeholder='Description' />
				<Input name='imageUrl' placeholder='Image (url)' />
				<Btn
					type='submit'
					ghost
					primary='green'
					style={{ margin: '2.7rem auto 0' }}>
					Add Card
				</Btn>
			</form>
		</Card>
	)
}

export default CardForm
