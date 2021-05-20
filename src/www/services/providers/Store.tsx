import React, { useState, createContext, useContext } from 'react'

type Store = {
	isLoading: boolean
	store?: any
}
export const StoreContext = createContext<Store>({ isLoading: false })
export const useStore = () => useContext(StoreContext)

export const StoreProvider: React.FC = ({ children }) => {
	const [store, setStore] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	const initialState = { isLoading, setIsLoading, store, setStore }

	return (
		<StoreContext.Provider value={initialState}>
			{children}
		</StoreContext.Provider>
	)
}
