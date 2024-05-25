import { number } from 'joi'

declare module 'express-serve-static-core' {
  interface Request {
    user_id?: number
  }
}
