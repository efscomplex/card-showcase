import { Tiendeo } from 'presentators/request/Tiendeo'
import React, { useState } from 'react'
import CardView from '@/components/shared/CardView'

function Main() {
	const [cards, setCards] = useState([])

	React.useLayoutEffect(() => {
		Tiendeo.instance()
			.getData('cards')
			.then((cards: any) => setCards(cards))
	}, [])

	return (
		<div>
			{cards.map((card) => (
				<CardView {...card} />
			))}
		</div>
	)
}

export default Main
