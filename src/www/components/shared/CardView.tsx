import Card from '@/components/shared/Card'
import { Btn } from 'lib'
import { Tiendeo } from 'presentators/request/Tiendeo'
import React from 'react'
import { ImCross } from 'react-icons/im'
import styled from 'styled-components'
import { useStore } from 'www/services/providers/Store'

type CardProps = {
	title: string
	description: string
	imageUrl: string
	id: string
}
const CardView: React.FC<CardProps> = ({
	title,
	description,
	imageUrl,
	id
}) => {
	const { setCards } = useStore()
	const deleteCard = async () => {
		await Tiendeo.instance().deleteData(`cards/${id}`)
		const cards = await Tiendeo.instance().getCards()
		setCards(cards)
	}

	return (
		<Card title={title} description={description} imgSrc={imageUrl}>
			<CardBtn onClick={deleteCard}>
				<ImCross />
			</CardBtn>
		</Card>
	)
}

const CardBtn = styled(Btn)`
	position: absolute;
	top: -1rem;
	right: -1rem;
	opacity: 0;
	transition: opacity 0.25s ease;
	color: var(--danger);
	border: none;
	${Card}:hover & {
		opacity: 1;
	}
`

export default CardView
