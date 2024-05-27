import express, { Request, Response } from 'express'
import axios from 'axios'
import { injectable } from 'tsyringe'

const app = express()

@injectable()
export default class SearchMoviesSuggested {
  async requestToApiWithoutGenres(page: number): Promise<any> {
    const params = {
      api_key: process.env.CHAVE_API,
      language: 'pt-BR',
      sort_by: 'popularity.desc',
      page: page,
      include_adult: false,
      include_video: false,
    }
    try {
      const response = await axios.get(
        'http://api.themoviedb.org/3/discover/movie',
        { params },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async requestToApiWithGenres(page: number, genreId: number): Promise<any> {
    const params = {
      api_key: process.env.CHAVE_API,
      language: 'pt-BR',
      sort_by: 'popularity.desc',
      page: page,
      include_adult: false,
      include_video: false,
      with_genres: genreId,
    }
    try {
      const response = await axios.get(
        'http://api.themoviedb.org/3/discover/movie',
        { params },
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}
