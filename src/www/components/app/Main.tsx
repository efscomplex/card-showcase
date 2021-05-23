import CardView from '@/components/useCases/cards/CardView'
import { Card } from 'models/Card'
import React from 'react'
import styled from 'styled-components'
import { useStore } from 'www/services/providers/Store'

const Main: React.FC = () => {
	const { cards } = useStore()

	return (
		<CardContainer className='shadow'>
			{cards.map((card: Card) => (
				<CardView className='fade-in' key={card.id} {...card} />
			))}
		</CardContainer>
	)
}
const CardContainer = styled('div')`
	padding-top: 3rem;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	gap: 2rem;

	& > div {
		transition: transform 0.25s ease;
		&:hover {
			transform: scale(1.075);
		}
	}
`

export default Main
