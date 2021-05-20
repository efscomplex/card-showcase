import React from 'react'
import { Card, Text } from 'lib'

type CardProps = {
	title: string
	description: string
	imageUrl: string
}
const CardView: React.FC<CardProps> = ({ title, description, imageUrl }) => {
	return (
		<Card>
			<h1>{title}</h1>
			<Text as='p'>{description}</Text>
			<Text as='p'>{imageUrl}</Text>
		</Card>
	)
}

export default CardView
