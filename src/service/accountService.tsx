import { Authentication, CreateUser, GetUser } from '../entities/UserEntities'
import ApiUsers from './apiUsers'

export default class accountService {
  public static async Authentication(user: GetUser): Promise<Authentication> {
    const require = await ApiUsers.getUser(user)
    const authorization: Authentication = await require.data()

    return authorization
  }

  public static async RegisterUser(user: CreateUser) {
    await ApiUsers.postUser(user)
  }
}
