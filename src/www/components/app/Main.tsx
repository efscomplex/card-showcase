import CardView from '@/components/shared/CardView'
import { Card } from 'models/Card'
import React from 'react'
import styled from 'styled-components'
import { useStore } from 'www/services/providers/Store'

const Main: React.FC = () => {
	const { cards } = useStore()

	return (
		<CardShower className='shadow'>
			{cards.map((card: Card) => (
				<CardView key={card.id} {...card} />
			))}
		</CardShower>
	)
}
const CardShower = styled('div')`
	padding-top: 3rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2rem;
	& > div {
		gap: 1rem;
		transition: transform 0.25s ease;
		&:hover {
			transform: scale(1.075);
		}
	}
`

export default Main
