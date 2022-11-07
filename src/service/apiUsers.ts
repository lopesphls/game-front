import axios from 'axios'
import { CreateUser, GetUser } from '../entities/UserEntities'

const apiUsers = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})
export default class ApiUsers {
  public static async getUser(Getuser: GetUser) {
    const user = await apiUsers.get('/users?_limit=4')
    return user
  }

  public static async postUser(user: CreateUser) {
    return await apiUsers.post('/users/create', {
      user,
    })
  }
}
