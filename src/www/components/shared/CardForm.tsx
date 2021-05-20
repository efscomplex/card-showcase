import { Card, Text, Input, Btn } from 'lib'
import React from 'react'
import { Tiendeo } from 'presentators/request/Tiendeo'
import { useStore } from 'www/services/providers/Store'

const CardForm: React.FC<any> = ({ setShowModal }) => {
	const { setCards } = useStore()

	const addNewCard = (e: any) => {
		e.preventDefault()
		const els = e.target.elements

		const payload = {
			title: els.title.value,
			description: els.description.value,
			imageUrl: els.imageUrl.value
		}
		Tiendeo.instance()
			.postData('cards', payload)
			.then((card) => {
				setCards((cards: any) => [...cards, card])
				setShowModal(false)
			})
	}
	return (
		<Card>
			<Text.Title>New card</Text.Title>
			<form
				onSubmit={addNewCard}
				style={{
					padding: '1rem 0',
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
					style={{ marginTop: '1rem', alignSelf: 'center' }}>
					Add Card
				</Btn>
			</form>
		</Card>
	)
}

export default CardForm
