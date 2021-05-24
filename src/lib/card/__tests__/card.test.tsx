import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '../Card'

describe('Card Component', () => {
	const description = 'awesome description'
	const title = 'Awesome title'

	test(`A card shows an ${description}`, async () => {
		render(
			<Card
				title={title}
				description={description}
				imgSrc='fake_image_url'
			/>
		)
		expect(screen.getByText(description)).toHaveTextContent(description)
	})
	test(`A card shows an ${description}`, async () => {
		render(
			<Card
				title={title}
				description={description}
				imgSrc='fake_image_url'
			/>
		)
		const container = document.querySelector('div')
		expect(container).toHaveTextContent(title)
	})
})
