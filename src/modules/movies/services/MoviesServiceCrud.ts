import { injectable, inject } from 'tsyringe'
import { IMovieRepository } from '../../../models/repositories/IMovieRepository'
import { AppError } from '../../utils/error'

@injectable()
export default class MoviesServiceCrud {
  constructor(
    @inject('MovieRepository')
    private moviesRepository: IMovieRepository,
  ) {}
  public async toogleFavorite(data: any): Promise<any> {
    let watched = false
    const movieExist = await this.moviesRepository.findByTmdbId(data.tmdbId)
    if (movieExist && movieExist.watched) {
      watched = true
    } else {
      watched = false
    }
    data.watched = watched
    data.profile_id = Number(data.profile_id)
    const profile = await this.moviesRepository.toogleFavorite(data)
    return profile
  }
  public async toogleWatched(data: any): Promise<any> {
    let favorite = false
    const movieExist = await this.moviesRepository.findByTmdbId(data.tmdbId)

    if (movieExist && movieExist.watched) {
      favorite = true
    } else {
      favorite = false
    }
    data.favorite = favorite
    data.profile_id = Number(data.profile_id)
    delete data.user_id
    const profile = await this.moviesRepository.toogleWatched(data)
    return profile
  }

  public async getWishlist(profile_id: number, page: number): Promise<any> {
    const movies = await this.moviesRepository.getWishList(profile_id, page)
    return movies
  }
  public async getWatched(profile_id: number, page: number): Promise<any> {
    const movies = await this.moviesRepository.getWatched(profile_id, page)
    return movies
  }
  public async addFavoriteDirect(data: any): Promise<any> {
    let watched = false
    const movieExist = await this.moviesRepository.findByTmdbId(data.tmdbId)
    if (movieExist && movieExist.watched) {
      watched = true
    } else {
      watched = false
    }
    data.watched = watched
    const profileFavorite = await this.moviesRepository.find(
      data.profile_id,
      data.tmdbId,
    )

    if (profileFavorite?.favorite) {
      throw new AppError('Filme já está na sua lista de desejos')
    }
    await this.moviesRepository.toogleFavorite(data)
  }
  public async addWatchedDirect(data: any): Promise<any> {
    let favorite = false
    const movieExist = await this.moviesRepository.findByTmdbId(data.tmdbId)

    if (movieExist && movieExist.watched) {
      favorite = true
    } else {
      favorite = false
    }
    data.favorite = favorite
    delete data.user_id
    const profileFavorite = await this.moviesRepository.find(
      data.profile_id,
      data.tmdbId,
    )
    if (profileFavorite?.watched) {
      throw new AppError('Filme já está na sua lista de assistidos')
    }
    await this.moviesRepository.toogleWatched(data)
  }
}
