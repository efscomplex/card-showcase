import { TokenStorage } from '../TokenStorage'
import { Fetch } from './Fetch'

export class Tiendeo extends Fetch {
	private static tiendeo: Tiendeo | undefined
	public tokenStorage: TokenStorage | undefined

	private constructor(public baseUrl: string) {
		super(baseUrl)
	}

	public static instance(): Tiendeo {
		if (!this.tiendeo) {
			throw new Error(
				'You must be initialize requests. Ex: Fetch.init(url)'
			)
		}
		return this.tiendeo
	}

	public setTokenStorage(tokenStorage: TokenStorage) {
		this.tokenStorage = tokenStorage
	}

	public static init(baseUrl: string) {
		if (!this.tiendeo) {
			this.tiendeo = new Tiendeo(baseUrl)
		}
		return this.tiendeo
	}
	getAuthOptions() {
		if (!this.tokenStorage) throw Error('token storage was not setted.')
		const token = this.tokenStorage.getToken()

		return {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	}
	public getUserToken() {
		return super.getData('users').then((resp) => resp.text())
	}
	public getCards() {
		return super
			.getData('cards', this.getAuthOptions())
			.then((resp) => resp.json())
	}
	public async addCard(payload: any) {
		await super.postData('cards', payload, this.getAuthOptions())
		const cards = await this.getCards()
		return cards
	}
	public async deleteCard(id: string) {
		await super.deleteData(`cards/${id}`, this.getAuthOptions())
		const cards = await this.getCards()
		return cards
	}
	public async updateCard(id: string, payload: any) {
		if (!this.tokenStorage) throw Error('token storage was not setted.')
		const token = this.tokenStorage.getToken()
		const options = {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		}
		const data = JSON.stringify(payload)
		await super.putData(`cards/${id}`, data, options)
		const cards = await this.getCards()
		return cards
	}
}
