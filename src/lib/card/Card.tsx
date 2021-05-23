import React, { createRef } from 'react'
import styled from 'styled-components'
import imgFallback from './fallbackImg'
import { Wrap, Image, Content } from './cardStyles'

type CardProps = {
	title: string
	description: string
	imgSrc: string
}
const CardComp: React.FC<CardProps> = ({
	title,
	description,
	imgSrc,
	...props
}) => {
	const imgRef: any = createRef()

	const setFallbackImg = () => {
		imgRef.current.src = imgFallback
	}

	return (
		<Wrap {...props}>
			<Image
				ref={imgRef}
				width='100%'
				src={imgSrc}
				onError={setFallbackImg}
			/>
			<Content title={title}>
				<p>{description}</p>
			</Content>
			{props.children}
		</Wrap>
	)
}

export const Card = styled(CardComp)``
