export class TokenStorage {
	constructor(public token_name: string) {}

	public getToken(): string | null {
		return localStorage.getItem(this.token_name)
	}
	public setToken(token: string): void {
		localStorage.setItem(this.token_name, token)
	}
}
