import axios from 'axios'

const apiGames = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export default class Games {
  public static async getAll() {
    return await apiGames.get('/posts?_limit=30')
  }

  public static async getPhotos() {
    return await apiGames.get('/photos?_limit=30')
  }
}
