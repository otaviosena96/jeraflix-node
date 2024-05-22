import { Request, Response } from 'express'
import { container } from 'tsyringe'
import UserServiceCrud from '../services/UserServiceCrud'

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body
      console.log(data)
      const user = await container.resolve(UserServiceCrud).create(data)
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
