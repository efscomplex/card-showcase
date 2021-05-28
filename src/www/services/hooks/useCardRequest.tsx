import { Tiendeo } from 'infrastructure/request/Tiendeo'
import { useModal } from 'lib'
import { ReactElement } from 'react'
import { useStore } from '../providers/Store'

const useCardRequest = () => {
	const Modal = useModal()
	const { setCards } = useStore()

	const getBlob = async (url: string) => {
		return await fetch(url).then((resp) => resp.blob())
	}
	const createCard = async (e: any) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const blob = await getBlob(formData.get('image') as string)
		formData.set('image', blob)
		Tiendeo.instance()
			.addCard(formData)
			.then((cards) => {
				Modal.close()
				setCards(cards)
			})
			.catch((error) => {
				alert(`something was wrong: ${error}`)
			})
	}
	const deleteCard = (id: string) => () =>
		Tiendeo.instance()
			.deleteCard(id)
			.then((cards) => setCards(cards))
			.catch((error) => {
				alert(`something was wrong: ${error}`)
			})

	const updateCard = (id: string) => (e: any) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const payload = {
			title: formData.get('title'),
			description: formData.get('description')
		}
		Tiendeo.instance()
			.updateCard(id, payload)
			.then((cards) => {
				Modal.close()
				setCards(cards)
			})
			.catch((error) => {
				alert(`something was wrong: ${error}`)
			})
	}
	return { createCard, deleteCard, updateCard, Modal }
}
export default useCardRequest
