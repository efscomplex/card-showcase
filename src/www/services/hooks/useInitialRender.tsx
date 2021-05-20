import React from 'react'
import { TokenStorage } from 'presentators/TokenStorage'
import { Tiendeo } from 'presentators/request/Tiendeo'
import { TIENDEO_URL, TIENDEO_TOKEN_NAME } from 'www/config'
import { useStore } from '@/services/providers/Store'

const tokenStorage = new TokenStorage(TIENDEO_TOKEN_NAME)
Tiendeo.init(TIENDEO_URL).setTokenStorage(tokenStorage)

const getUserToken = async () => {
	const token =
		tokenStorage.getToken() ?? (await Tiendeo.instance().getUserToken())
	tokenStorage.setToken(token)
}

const useInitialRender = () => {
	const { setIsLoading } = useStore()

	React.useLayoutEffect(() => {
		getUserToken().then(() => {
			setIsLoading(false)
		})
	}, [])
}
export default useInitialRender
