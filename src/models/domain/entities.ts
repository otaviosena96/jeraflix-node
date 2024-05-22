export interface IUser {
  id: number
  uuid: string
  name: string
  email: string
  password: string
  facebookId?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface IProfile {
  id: string
  uuid: string
  name: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

export interface IProfileMovieFavorite {
  id: string
  profileId: string
  tmdbId: number
  createdAt: Date
  updatedAt: Date
}

export interface IUserToken {
  id: number
  userId: string
  token: string
  createdAt: Date
  expiresAt: Date
  updatedAt: Date
}
