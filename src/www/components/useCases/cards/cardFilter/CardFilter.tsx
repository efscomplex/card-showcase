import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

export type FilterOptions = 'none' | 'title' | 'date'
type CardFilterProps = {
	children: (option: FilterOptions, target: string) => React.ReactChild
}

const CardFilter: React.FC<CardFilterProps> = ({ children, ...props }) => {
	const [option, setOption] = useState<FilterOptions>('none')
	const [target, setTarget] = useState('')
	const onChangeOption = ({ target }: any) => {
		setOption(target.value)
	}
	return (
		<div {...props}>
			<Filter>
				<label htmlFor='card-filter'>Filter by </label>
				<Select
					defaultValue='none'
					name='card-filter'
					onChange={onChangeOption}>
					<option value='none'>none</option>
					<option value='title'>Title</option>
					<option value='date'>Date</option>
				</Select>
				{option === 'title' && (
					<Input
						onChange={({ target }: any) => setTarget(target.value)}
					/>
				)}
			</Filter>
			{children(option, target)}
		</div>
	)
}
const Select = styled('select')`
	margin-left: 1rem;
	border: none;
	&:focus {
		outline: none;
	}
`
const Input = styled('input')`
	padding-bottom: 7px;
	margin-left: 1rem;
	border: none;
	border-bottom: 1px solid var(--color);
	&:focus {
		outline: none;
		border-bottom-color: var(--primary);
	}
`
const Filter = styled('div')`
	padding-top: 2rem;

	display: flex;
	justify-content: center;
`
export default CardFilter
