export default class AuthStorage {
  public static SaveToken(currentToken: any): void {
    localStorage.setItem('Auth', JSON.stringify(currentToken))
  }

  public static GetToken() {
    const currentAuth = localStorage.getItem('Auth')
    return JSON.parse(currentAuth)
  }

  public static LogOut(): void {
    localStorage.removeItem('Auth')
  }
}
