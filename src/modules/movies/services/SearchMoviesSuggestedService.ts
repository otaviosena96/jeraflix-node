import { container, inject, injectable } from 'tsyringe'
import SearchMoviesSuggested from '../../../shared/tmdb/SearchSuggested'
import { IMovieRepository } from '../../../models/repositories/IMovieRepository'
import { IProfileMovieFavorite } from '../../../models/domain/entities'

@injectable()
export default class SearchMoviesSuggestedService {
  constructor(
    @inject('MovieRepository')
    private movieRepository: IMovieRepository,
  ) {}

  public async execute(profile_id: number, page: number): Promise<any> {
    const profileMovies = await this.movieRepository.findByProfileId(profile_id)
    let suggestedMovies: any[] = []

    if (profileMovies.length === 0) {
      // Se não tiver nenhum filme favorito ainda, busca 20 aleatórios
      suggestedMovies = await this.requestRandomMovies(page, 20)
    } else {
      let mainGenre: number | null = null
      mainGenre = await this.getMainGenre(profileMovies)
      if (mainGenre !== null) {
        // Busca 15 filmes do gênero principal e adiciona à lista de filmes sugeridos
        const mainGenreMovies = await this.requestMoviesByGenre(
          mainGenre,
          page,
          18,
        )
        suggestedMovies.push(...mainGenreMovies)
      }

      // Busca 2 filmes aleatórios que não estão na lista de favoritos
      const randomMovies = await this.requestRandomMovies(page, 2)
      const filteredRandomMovies = randomMovies.filter((movie) => {
        return !profileMovies.some(
          (profileMovie: any) => profileMovie.tmdbId === movie.id,
        )
      })
      suggestedMovies.push(...filteredRandomMovies)

      // Verifica se há filmes sugeridos duplicados na lista de filmes do perfil
      let index = 0
      do {
        if (index >= suggestedMovies.length) {
          // Se todos os filmes foram verificados e a lista ainda tem menos de 20 filmes,
          // busca mais filmes aleatórios para completar a lista
          const newRandomMovies = await this.requestRandomMovies(
            page,
            20 - suggestedMovies.length,
          )
          const newFilteredRandomMovies = newRandomMovies.filter((movie) => {
            return !profileMovies.some(
              (profileMovie: any) => profileMovie.tmdbId === movie.id,
            )
          })
          suggestedMovies.push(...newFilteredRandomMovies)
        } else {
          const movie = suggestedMovies[index]
          if (
            profileMovies.some(
              (profileMovie: any) => profileMovie.tmdbId === movie.id,
            )
          ) {
            // Remove o filme duplicado da lista
            suggestedMovies.splice(index, 1)
          } else {
            index++
          }
        }
      } while (suggestedMovies.length < 20)
    }

    // Adiciona os nomes dos gêneros aos filmes sugeridos
    for (let i = 0; i < suggestedMovies.length; i++) {
      const genre = await this.movieRepository.findGenreByTmdbId(
        suggestedMovies[i].genre_ids[0],
      )
      suggestedMovies[i].genre = genre.name
    }

    return suggestedMovies.slice(0, 20)
  }

  private async requestRandomMovies(
    page: number,
    limit: number,
  ): Promise<any[]> {
    const result = await container
      .resolve(SearchMoviesSuggested)
      .requestToApiWithoutGenres(page)
    return result.results.slice(0, limit)
  }

  private async requestMoviesByGenre(
    genreId: number,
    page: number,
    limit: number,
  ): Promise<any[]> {
    const result = await container
      .resolve(SearchMoviesSuggested)
      .requestToApiWithGenres(page, genreId)

    return result.results.slice(0, limit)
  }
  private async getMainGenre(movies: IProfileMovieFavorite[]): Promise<number> {
    // Objeto para armazenar a contagem de cada genre_tmdb_id
    const countMap: { [key: number]: number } = {}

    // Loop pelos filmes e contar ocorrências de cada genre_tmdb_id
    movies.forEach((movie: any) => {
      const genreId = movie.genre_tmdb_id
      countMap[genreId] = (countMap[genreId] || 0) + 1
    })

    // Variáveis para armazenar o genre_tmdb_id mais frequente e sua contagem
    let mostFrequentGenreId: number | undefined
    let maxCount = 0

    // Loop pelo mapa de contagem para encontrar o genre_tmdb_id mais frequente
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
}
