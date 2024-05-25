import { Router } from 'express'
import UsersController from '../modules/users/controllers/UserController'
import { validateRequest } from '../http/middlewares/validateRequest'
import { userSchema } from '../http/validations/userCreateSchema'
import ProfileController from '../modules/profiles/controllers/ProfileController'
import authenticator from '../http/middlewares/authenticator'
const routes = Router()
const usersController = new UsersController()
const profileController = new ProfileController()

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

routes.post(
  '/users/signup',
  validateRequest(userSchema),
  usersController.create,
)
routes.post('/users/signin', usersController.login)
routes.post('/profiles/create', profileController.create)
routes.get('/profiles', authenticator, profileController.create)

export default routes
