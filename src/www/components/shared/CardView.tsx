import React from 'react'
import { Card } from 'lib'

type CardProps = {
	title: string
	description: string
	imageUrl: string
}
const CardView: React.FC<CardProps> = ({ title, description, imageUrl }) => {
	return (
		<Card>
			<h1>{title}</h1>
		</Card>
	)
}

export default CardView
