import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import jwt, { JwtPayload } from 'jsonwebtoken'

const authenticator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let token = req.headers.authorization

    if (!token) {
      return res.status(401).json({ error: 'Token not provided' })
    }

    token = token.replace('Bearer ', '')
    if (!process.env.JWT_SECRET) {
      return res.status(401).json({ error: 'JWT_SECRET not provided' })
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload

    if (!decodedToken) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    if (!decodedToken.exp) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    const now = Date.now() / 1000
    if (decodedToken.exp < now) {
      return res.status(401).json({ error: 'Token expired' })
    }
    req.headers.user_id = decodedToken.userId
    next()
  } catch (error: any) {
    return res.status(401).json({ error: error.message })
  }
}

export default authenticator
