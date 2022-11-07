export interface CreateUser {
  name: string
  email: string
  password: string
  CPF: string
  isAdmin: boolean
}

export interface GetUser {
  email: string
  password: string
}

export interface User {
  nickname: string
  image: string
}

export interface Authentication {
  token: string
  user?: {
    name: string
    isAdmin: boolean
  }
}
