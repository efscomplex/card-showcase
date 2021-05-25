import React from 'react'

type MapProps = {
	from: any[]
	render: (items: any) => React.ReactElement
	filter?: <T>(item: T) => boolean
	sort?: (a: any, b: any) => number
	as?: React.ElementType
}
export const Map: React.FC<MapProps> = ({ as, from, filter, render, sort }) => {
	let items = filter ? from.filter(filter) : from
	items = sort ? items.sort(sort) : items
	const children = React.Children.toArray(items.map(render))
	const toRender = as ? React.createElement(as, null, children) : children

	return toRender as React.ReactElement
}
