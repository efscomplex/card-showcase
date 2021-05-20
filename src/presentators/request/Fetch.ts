import { Request, Options } from './Request'

export class Fetch implements Request {
	constructor(public baseUrl: string) {}

	// CRUD
	public getData(endpoint: string, opts?: Options) {
		const options = {
			method: 'get',
			...opts
		}
		console.log(options)

		return fetch(this.baseUrl + endpoint, options).then((resp) =>
			resp.json()
		)
	}
	public postData(endpoint: string, payload: any, opts?: Options) {
		const options = {
			method: 'post',
			body: payload,
			...opts
		}
		return fetch(this.baseUrl + endpoint, options).then((resp) =>
			resp.json()
		)
	}
	public putData(endpoint: string, payload: any, opts?: Options) {
		const options = {
			method: 'put',
			body: payload,
			...opts
		}
		return fetch(this.baseUrl + endpoint, options).then((resp) =>
			resp.json()
		)
	}
	public deleteData(endpoint: string, opts?: Options) {
		const options = {
			method: 'delete',
			...opts
		}
		return fetch(this.baseUrl + endpoint, options).then((resp) =>
			resp.json()
		)
	}
}
