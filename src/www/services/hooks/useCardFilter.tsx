import { useState } from 'react'
import { useStore } from '../providers/Store'

const useCardFilter = () => {
	const { cards } = useStore()
	const [target, setTarget] = useState()
}
