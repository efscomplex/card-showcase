import React, { createRef } from 'react'
import styled from 'styled-components'
import imgFallback from '@/public/images/fallbackCardImg'
type CardProps = {
	title: string
	description: string
	imgSrc: string
}
const Card: React.FC<CardProps> = ({
	title,
	description,
	imgSrc,
	children
}) => {
	const imgRef: any = createRef()

	const setFallbackImg = () => {
		imgRef.current.src = imgFallback
	}

	return (
		<Wrap>
			<Image
				ref={imgRef}
				width='100%'
				src={imgSrc}
				onError={setFallbackImg}
			/>
			<Title>{title}</Title>
			<p>{description}</p>
			{children}
		</Wrap>
	)
}

const Wrap = styled('div')`
	position: relative;
	max-width: 30rem;
`
const Image = styled('img')<{ ref: any; src: string }>`
	position: relative;
	width: 100%;
	height: auto;
`

const Title = styled('h1')`
	position: relative;
	bottom: 4rem;
	left: 4rem;
`

export default styled(Card)``
