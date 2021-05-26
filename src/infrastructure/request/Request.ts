type Obj = {
	[key: string]: any
}
export type Options = {
	header?: Obj
	body?: any
	[key: string]: any
}
export interface Request {
	baseUrl: string

	// CRUD
	getData(endpoint: string, options?: Options): Promise<any>

	postData(endpoint: string, payload: any, options?: Options): Promise<any>

	putData(endpoint: string, payload: any, options?: Options): Promise<any>

	deleteData(endpoint: string, options?: Options): Promise<any>
}
