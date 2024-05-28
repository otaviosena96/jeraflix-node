import { container, inject, injectable } from 'tsyringe'
import SearchMoviesSuggested from '../../../shared/tmdb/SearchSuggested'
import { IMovieRepository } from '../../../models/repositories/IMovieRepository'
import { IProfileMovieFavorite } from '../../../models/domain/entities'
import { IMovieResponse, ResponseTmdb } from '../../../models/domain/dtos'
import axios from 'axios'

@injectable()
export default class SearchMoviesDirectService {
  constructor(
    @inject('MovieRepository')
    private movieRepository: IMovieRepository,
  ) {}

  public async execute(search: string, page: number): Promise<ResponseTmdb> {
    const movies = await this.get(search, page)
    //movies.movies = await this.appendGenreNames(movies.movies)
    return movies
  }

  private async get(search: string, page: number): Promise<any> {
    const params = {
      api_key: process.env.CHAVE_API,
      language: 'pt-BR',
      query: search,
      page: page,
      include_adult: false,
    }
    try {
      const response = await axios.get(
        'http://api.themoviedb.org/3/search/movie',
        { params },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  private async appendGenreNames(suggestedMovies: any[]): Promise<any[]> {
    return Promise.all(
      suggestedMovies.map(async (movie) => {
        const genre = await this.movieRepository.findGenreById(
          movie.genre_ids[0],
        )
        movie.genre = genre.name
        return movie
      }),
    )
  }
}
