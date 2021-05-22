import { Btn, Input, Text } from 'lib'
import React, { FormEventHandler } from 'react'
import styled from 'styled-components'

type Props = {
	title?: string
	action?: string
	context?: any
	handleOnSubmit: FormEventHandler
	[key: string]: any
}
const CardForm: React.FC<Props> = ({
	title,
	action,
	context,
	handleOnSubmit,
	...props
}) => {
	return (
		<Wrapper {...props}>
			<Text.Title>{title}</Text.Title>
			<form
				onSubmit={handleOnSubmit}
				style={{
					padding: '1rem 0 0',
					margin: '1rem',
					alignSelf: 'center'
				}}>
				<Input
					name='title'
					placeholder='Title'
					defaultValue={context?.title}
				/>
				<Input
					name='description'
					placeholder='Description'
					defaultValue={context?.description}
				/>
				<Input
					name='imageUrl'
					placeholder='Image (url)'
					defaultValue={context?.imageUrl}
					disabled={!!context?.imageUrl}
				/>
				<Btn
					type='submit'
					primary='green'
					style={{ margin: '2.7rem auto 0' }}>
					{action}
				</Btn>
			</form>
		</Wrapper>
	)
}

const Wrapper = styled('div')`
	padding: 1rem 1.7rem 0;
	display: flex;
	flex-direction: column;

	border-top: 4px solid var(--primary);
`

CardForm.defaultProps = {
	title: 'New card',
	action: 'Add Card'
}
export default CardForm
