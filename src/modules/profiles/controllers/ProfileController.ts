import { Request, Response } from 'express'
import { container } from 'tsyringe'
import ProfileServiceCrud from '../services/ProfileServiceCrud'

export default class ProfileController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body
      const user = await container.resolve(ProfileServiceCrud).create(data)
      const status = 201
      const message = 'Usuário criado com sucesso!'
      return res.json({
        status,
        message,
        data: user,
      })
    } catch (error: any) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      })
    }
  }
}
