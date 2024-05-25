import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import jwt from 'jsonwebtoken'
import AuthUserService from '../../modules/users/services/AuthUserService'

const authenticator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let token = req.headers.authorization
    console.log(token)
    if (!token) {
      return res.status(401).json({ error: 'Token not provided' })
    }

    token = token.replace('Bearer ', '')
    if (!process.env.JWT_SECRET) {
      return res.status(401).json({ error: 'JWT_SECRET not provided' })
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

/*     // Verifica se o token está expirado
    if (Date.now() >= decodedToken * 1000) {
      return res.status(401).json({ error: 'Token expired' })
    } */

    // Se chegou até aqui, o token é válido e não expirou
    next()
  } catch (error: any) {
    return res.status(401).json({ error: error.message })
  }
}

export default authenticator
