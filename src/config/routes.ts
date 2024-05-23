import { Router } from 'express'
import UsersController from '../modules/users/controllers/UserController'

const routes = Router()
const usersController = new UsersController()

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

routes.post('/users/create', usersController.create)
routes.post('/login', usersController.login)

export default routes
