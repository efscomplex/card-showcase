import { TokenStorage } from './../TokenStorage'
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
		return this.getData('cards').then((resp) => resp.json())
	}
	public async addCard(payload: any, callback?: Function) {
		await this.postData('cards', payload).then((resp) => resp.json())
		const cards = await this.getCards()
		callback?.(cards)
	}
	public async deleteCard(id: string, callback?: Function) {
		await this.deleteData(`cards/${id}`)
		const cards = await this.getCards()
		callback?.(cards)
	}
	public async updateCard(id: string, payload: any, callback?: Function) {
		await this.putData(`cards/${id}`, payload)
		const cards = await this.getCards()
		callback?.(cards)
	}

	public getData(endpoint: string) {
		return super.getData(endpoint, this.getAuthOptions())
	}
	public postData(endpoint: string, payload: any) {
		return super.postData(endpoint, payload, this.getAuthOptions())
	}
	public putData(endpoint: string, payload: any) {
		return super.putData(endpoint, payload, this.getAuthOptions())
	}
	public deleteData(endpoint: string) {
		return super.deleteData(endpoint, this.getAuthOptions())
	}
}
