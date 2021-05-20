import React from 'react'
import { render } from 'react-dom'
import App from '@/components/app/App'
import { StoreProvider } from '@/services/providers/Store'

import './styles/index'

const jsxElement = (
	<StoreProvider>
		<App />
	</StoreProvider>
)
render(jsxElement, document.getElementById('app'))
