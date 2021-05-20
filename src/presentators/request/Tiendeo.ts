import { Fetch } from './Fetch'

export class Tiendeo extends Fetch {
	private static tiendeo: Tiendeo | undefined
	public tokenStorage: any

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

	public setTokenStorage(tokenStorage: any) {
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
		return super.getData(this.baseUrl + 'users').then((resp) => resp.text())
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
