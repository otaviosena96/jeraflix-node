import { Request, Response } from 'express'
import { container } from 'tsyringe'
import ProfileServiceCrud from '../services/SearchMoviesSuggestedService'
import SearchMoviesSuggestedService from '../services/SearchMoviesSuggestedService'
import MoviesServiceCrud from '../services/MoviesServiceCrud'
export default class MoviesController {
  public async searchMoviesSuggested(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const profile_id = req.query.profile_id
      const page = req.query.page

      const movies = await container
        .resolve(SearchMoviesSuggestedService)
        .execute(Number(profile_id), Number(page))
      const status = 201
      const message = 'Operação realizada com sucesso!'
      return res.json({
        status,
        message,
        data: movies,
      })
    } catch (error: any) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      })
    }
  }
  public async addToFavorite(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body
      data.user_id = req.headers.user_id
      const movies = await container
        .resolve(MoviesServiceCrud)
        .addToFavorite(data)
      const status = 201
      const message = 'Operação realizada com sucesso!'
      return res.json({
        status,
        message,
        data: movies,
      })
    } catch (error: any) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      })
    }
  }

  public async getWishlist(req: Request, res: Response): Promise<Response> {
    try {
      const profile_id = Number(req.query.profile_id)
      const page = Number(req.query.page)
      const movies = await container
        .resolve(MoviesServiceCrud)
        .getWishlist(profile_id, page)
      const status = 201
      const message = 'Operação realizada com sucesso!'
      return res.json({
        status,
        message,
        data: movies,
      })
    } catch (error: any) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      })
    }
  }
}
