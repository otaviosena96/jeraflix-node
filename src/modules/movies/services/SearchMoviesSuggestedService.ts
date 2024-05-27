import { container, inject, injectable } from 'tsyringe'
import SearchMoviesSuggested from '../../../shared/tmdb/SearchSuggested'
import { IMovieRepository } from '../../../models/repositories/IMovieRepository'
import { IProfileMovieFavorite } from '../../../models/domain/entities'
import { IMovieResponse, ResponseTmdb } from '../../../models/domain/dtos'

@injectable()
export default class SearchMoviesSuggestedService {
  constructor(
    @inject('MovieRepository')
    private movieRepository: IMovieRepository,
  ) {}

  public async execute(
    profile_id: number,
    page: number,
  ): Promise<ResponseTmdb> {
    const movies = await this.get(profile_id, page)
    movies.movies = await this.appendGenreNames(movies.movies)
    return movies
  }

  public async get(profile_id: number, page: number): Promise<ResponseTmdb> {
    const profileMovies = await this.movieRepository.findByProfileId(profile_id)
    let suggestedMovies: ResponseTmdb = {
      movies: [],
      total_pages: 0,
      total_results: 0,
    }

    if (profileMovies.length === 0) {
      return await this.requestRandomMovies(page, 20)
    } else {
      suggestedMovies = await this.getMoviesBasedOnProfile(profileMovies, page)
    }

    suggestedMovies.movies = await this.appendGenreNames(suggestedMovies.movies)

    return {
      movies: suggestedMovies.movies.slice(0, 20),
      total_pages: suggestedMovies.total_pages,
      total_results: suggestedMovies.total_results,
    }
  }

  private async getMoviesBasedOnProfile(
    profileMovies: IProfileMovieFavorite[],
    page: number,
  ): Promise<ResponseTmdb> {
    let suggestedMovies: ResponseTmdb = {
      movies: [],
      total_pages: 0,
      total_results: 0,
    }
    const mainGenre = await this.getMainGenre(profileMovies)

    if (mainGenre !== null) {
      const mainGenreMovies = await this.requestMoviesByGenre(
        mainGenre,
        page,
        20,
      )
      suggestedMovies = mainGenreMovies
    }

    return this.getUniqueMovies(suggestedMovies, profileMovies, page)
  }

  public async getUniqueMovies(
    suggestedMovies: ResponseTmdb,
    profileMovies: IProfileMovieFavorite[],
    page: number,
  ): Promise<ResponseTmdb> {
    const profileMovieIds = new Set(profileMovies.map((movie) => movie.tmdbId))

    // Filtre suggestedMovies para remover duplicatas
    let uniqueSuggestedMovies = suggestedMovies.movies.filter(
      (movie) => !profileMovieIds.has(movie.id),
    )

    if (uniqueSuggestedMovies.length === 20) {
      return {
        movies: uniqueSuggestedMovies.slice(0, 20),
        total_pages: suggestedMovies.total_pages,
        total_results: suggestedMovies.total_results,
      }
    } else {
      while (uniqueSuggestedMovies.length < 20) {
        page++
        const moreMovies = await this.requestRandomMovies(
          page,
          20 - uniqueSuggestedMovies.length,
        )
        const newUniqueMovies = moreMovies.movies.filter(
          (movie) =>
            !profileMovieIds.has(movie.id) &&
            !uniqueSuggestedMovies.some(
              (uniqueMovie) => uniqueMovie.id === movie.id,
            ),
        )
        uniqueSuggestedMovies = uniqueSuggestedMovies.concat(newUniqueMovies)
      }
    }

    return {
      movies: uniqueSuggestedMovies.slice(0, 20),
      total_pages: suggestedMovies.total_pages,
      total_results: suggestedMovies.total_results,
    }
  }

  private async requestRandomMovies(
    page: number,
    limit: number,
  ): Promise<ResponseTmdb> {
    const response = await container
      .resolve(SearchMoviesSuggested)
      .requestToApiWithoutGenres(page)

    const movies = response.results.slice(0, limit)
    const total_pages = response.total_pages
    const total_results = response.total_results

    return { movies, total_pages, total_results }
  }

  private async requestMoviesByGenre(
    genreId: number,
    page: number,
    limit: number,
  ): Promise<ResponseTmdb> {
    const response = await container
      .resolve(SearchMoviesSuggested)
      .requestToApiWithGenres(page, genreId)

    const movies = response.results.slice(0, limit)
    const total_pages = response.total_pages
    const total_results = response.total_results

    return { movies, total_pages, total_results }
  }

  private async getMainGenre(movies: IProfileMovieFavorite[]): Promise<number> {
    const countMap: { [key: number]: number } = {}
    movies.forEach((movie: any) => {
      const genreId = movie.genre_id
      countMap[genreId] = (countMap[genreId] || 0) + 1
    })

    let mostFrequentGenreId: number | undefined
    let maxCount = 0

    for (const genreId in countMap) {
      if (countMap[genreId] > maxCount) {
        mostFrequentGenreId = parseInt(genreId)
        maxCount = countMap[genreId]
      }
    }

    if (mostFrequentGenreId !== undefined) {
      return mostFrequentGenreId
    } else {
      throw new Error('Nenhum gênero encontrado nos filmes fornecidos.')
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
