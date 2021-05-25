import CardView from '@/components/useCases/cards/CardView'
import CardFilter from '@/components/useCases/cards/cardFilter/CardFilter'
import {
	getCardFilter,
	dateSort
} from '@/components/useCases/cards/cardFilter/getCardFilter'
import { Card } from 'models/Card'
import React from 'react'
import styled from 'styled-components'
import { useStore } from 'www/services/providers/Store'
import { Map } from 'lib'

const Main: React.FC = () => {
	const { cards } = useStore()

	const render = (card: Card) => (
		<CardView className='fade-in' key={card.id} {...card} />
	)
	return (
		<div>
			<CardFilter>
				{(options: any, target: string) => (
					<CardContainer>
						<Map
							from={cards}
							filter={getCardFilter(options, target)}
							render={render}
							as={CardContainer}
							sort={options === 'date' && dateSort}
						/>
					</CardContainer>
				)}
			</CardFilter>
		</div>
	)
}

const CardContainer = styled('div')`
	padding-top: 2rem;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	gap: 2rem 1rem;

	& > div {
		transition: transform 0.25s ease;
		&:hover {
			transform: scale(1.075);
		}
	}
`

export default Main
