import React from 'react'
import { TokenStorage } from 'presentators/TokenStorage'
import { Tiendeo } from 'presentators/request/Tiendeo'
import { TIENDEO_URL, TIENDEO_TOKEN_NAME } from 'www/config'
import { useStore } from '@/services/providers/Store'
import { Card } from 'models/Card'

const tokenStorage = new TokenStorage(TIENDEO_TOKEN_NAME)
Tiendeo.init(TIENDEO_URL).setTokenStorage(tokenStorage)

const getUserToken = async () => {
	const token =
		tokenStorage.getToken() ?? (await Tiendeo.instance().getUserToken())

	tokenStorage.setToken(token)
}

const getInitialData = () => {
	return Tiendeo.instance().getCards()
}

const initialRender = async () => {
	await getUserToken()
	return getInitialData()
}

const useInitialRender = () => {
	const { setIsLoading, setCards } = useStore()

	React.useLayoutEffect(() => {
		initialRender().then((cards: Card[]) => {
			setCards(cards)
			setIsLoading(false)
		})
	}, [])
}
export default useInitialRender
