export interface CreateUserDTO {
  name: string
  uuid: string
  email: string
  password: string
  facebookId?: string | null
}

export interface UpdateUserDTO {
  name?: string
  email?: string
  password?: string
  facebookId?: string | null
}

export interface CreateProfileDTO {
  name: string
  userId: string
}

export interface UpdateProfileDTO {
  name?: string
}

export interface CreateProfileMovieFavoriteDTO {
  profileId: string
  tmdbId: number
}

export interface UpdateProfileMovieFavoriteDTO {
  tmdbId?: number
}

export interface CreateUserTokenDTO {
  userId: string
  token: string
  expiresAt: Date
}

export interface UpdateUserTokenDTO {
  token?: string
  expiresAt?: Date
}