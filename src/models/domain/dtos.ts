export interface CreateUserDTO {
  name: string
  uuid: string
  email: string
  birth_date: Date
  password: string
  facebookId?: string | null
  color?: string | null
}

export interface UpdateUserDTO {
  name?: string
  email?: string
  password?: string
  facebookId?: string | null
}

export interface CreateProfileDTO {
  uuid: string
  name: string
  color: string
  user_id: number
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

export interface LoginDto {
  email: string
  password: string
}

export interface CreateMovieFavorite {
  tmdbId: number
  title: string
  overview: string
  profile_id: number
  genre_id: number
  watched: boolean
  favorite: boolean
}

export interface ResponseTmdb {
  movies: IMovieTmdb[]
  total_pages: number
  total_results: number
}

export interface ResponseTmdbByJera {
  movies: IMovieTmdbByJera[]
  total_pages: number
  total_results: number
}

export interface IMovieTmdb {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IMovieTmdbByJera {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  genre: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export interface IMovieResponse {
  movies: IMovieTmdb[]
  total_pages: number
  total_results: number
}
