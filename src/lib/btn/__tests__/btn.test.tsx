import React from 'react'
import { screen, render } from '@testing-library/react'
import { Btn } from '../Btn'

describe('Btn Component', () => {
	test('The button shows a label', async () => {
		const label = 'awesome label'
		render(<Btn label={label} />)

		expect(screen.getByRole('button')).toHaveTextContent(label)
	})
})
