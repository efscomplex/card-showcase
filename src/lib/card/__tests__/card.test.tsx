import React from 'react'
import { render, screen } from '@testing-library/react'

import { Card } from '../Card'

describe('CARD COMPONENT', () => {
	const description = 'awesome description'
	test(`A card shows an ${description}`, async () => {
		render(
			<Card
				title='Awesome title'
				description={description}
				imgSrc='fake_image_url'
			/>
		)
		expect(screen.getByText(description)).toHaveTextContent(description)
	})
})
