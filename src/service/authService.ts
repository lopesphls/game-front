import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export default class AuthStorage {
  public static SaveToken(currentToken: any): void {
    localStorage.setItem('Auth', JSON.stringify(currentToken))
  }

  public static GetToken() {
    const currentAuth = JSON.parse(localStorage.getItem('Auth'))
    return currentAuth
  }

  public static LogOut(): void {
    localStorage.removeItem('Auth')
  }
}
