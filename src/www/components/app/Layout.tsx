import styled from 'styled-components'
import Header from '@/components/app/Header'
import Main from '@/components/app/Main'
import Footer from '@/components/app/Footer'

const Layout: any = styled('div')`
	min-height: 100vh;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content 1fr min-content;
`
Layout.Header = Header
Layout.Main = Main
Layout.Footer = Footer

export default Layout
