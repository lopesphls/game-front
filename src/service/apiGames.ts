import axios from 'axios'

export default class ApiGames {
  // private api: any = axios.create('https://jsonplaceholder.typicode.com/posts')
  public async getAll() {
    return await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=30',
    )
  }

  public async getPhotos() {
    return await axios.get(
      'https://jsonplaceholder.typicode.com/photos?_limit=30',
    )
  }
}
