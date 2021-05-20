import { Card } from 'models/Card'
import React, { useState, createContext, useContext } from 'react'

type Store = {
	isLoading: boolean
	setIsLoading: Function
	cards: Card[]
	setCards: Function
}
export const StoreContext = createContext({} as Store)
export const useStore = () => useContext(StoreContext)

export const StoreProvider: React.FC = ({ children }) => {
	const [cards, setCards] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const initialState = { isLoading, setIsLoading, cards, setCards }

	return (
		<StoreContext.Provider value={initialState}>
			{children}
		</StoreContext.Provider>
	)
}
