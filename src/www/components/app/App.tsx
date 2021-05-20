import React from 'react'
import Layout from '@/components/app/Layout'
import useInitialRender from '@/services/hooks/useInitialRender'
import { useStore } from 'www/services/providers/Store'
import { Spinner } from 'lib'

export default function App() {
	const { isLoading } = useStore()
	useInitialRender()

	if (isLoading) return <Spinner />
	return (
		<Layout>
			<Layout.Header />
			<Layout.Main />
			<Layout.Footer />
		</Layout>
	)
}
