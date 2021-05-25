import { Card } from 'models/Card'
import { FilterOptions } from './CardFilter'

export const getCardFilter = (option: FilterOptions, target: string) => {
	if (option === 'title') {
		return (item: Card) => item.title.includes(target)
	}
	if (option === 'date') {
		return (item: Card) => item.title.includes(target)
	}
	return (item: Card) => item
}

type SortFunction = (a: any, b: any) => number

export const dateSort: SortFunction = (a: Card, b: Card) => {
	return new Date(b.created) - new Date(a.created)
}
