import { Request, Response } from 'express'
import { container } from 'tsyringe'
import ProfileServiceCrud from '../services/ProfileServiceCrud'

export default class ProfileController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body
      data.user_id = req.headers.user_id ? Number(req.headers.user_id) : 0
      const profiles = await container.resolve(ProfileServiceCrud).create(data)
      const status = 201
      const message = 'Operação realizada com sucesso!'
      return res.json({
        status,
        message,
        data: profiles,
      })
    } catch (error: any) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      })
    }
  }

  public async findByUserId(req: Request, res: Response): Promise<Response> {
    try {
      const profiles = await container
        .resolve(ProfileServiceCrud)
        .findByUserId(req.headers.user_id ? Number(req.headers.user_id) : 0)
      const status = 201
      const message = 'Operação realizada com sucesso!'
      return res.json({
        status,
        message,
        data: profiles,
      })
    } catch (error: any) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      })
    }
  }
}
