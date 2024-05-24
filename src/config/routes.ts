import { Router } from 'express'
import UsersController from '../modules/users/controllers/UserController'
import { validateRequest } from '../http/middlewares/validateRequest'
import { userSchema } from '../http/validations/userCreateSchema'
const routes = Router()
const usersController = new UsersController()

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

routes.post(
  '/users/signup',
  validateRequest(userSchema),
  usersController.create,
)
routes.post('/users/signin', usersController.login)

export default routes
