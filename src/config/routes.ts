import { Router } from 'express'
import UsersController from '../modules/users/controllers/UserController'
import ProfileController from '../modules/profiles/controllers/ProfileController'
import MoviesController from '../modules/movies/controllers/MoviesController'
import { validateRequest } from '../http/middlewares/validateRequest'
import { userSchema } from '../http/validations/userCreateSchema'
import authenticator from '../http/middlewares/authenticator'
const routes = Router()
const usersController = new UsersController()
const profileController = new ProfileController()
const moviesController = new MoviesController()

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

routes.post(
  '/users/signup',
  validateRequest(userSchema),
  usersController.create,
)
routes.post('/users/signin', usersController.login)
routes.post('/profiles/create', authenticator, profileController.create)
routes.get('/profiles', authenticator, profileController.findByUserId)
routes.get('/movies/wishlist', authenticator, moviesController.getWishlist)
routes.get('/movies/watched', authenticator, moviesController.getWatched)
routes.get(
  '/movies/search-suggested',
  authenticator,
  moviesController.searchMoviesSuggested,
)
routes.post(
  '/movies/toogle-favorite',
  authenticator,
  moviesController.toogleFavorite,
)
routes.post(
  '/movies/toogle-watched',
  authenticator,
  moviesController.toogleWatched,
)

routes.post(
  '/movies/add-favorite-direct',
  authenticator,
  moviesController.addFavoriteDirect,
)

routes.post(
  '/movies/add-watched-direct',
  authenticator,
  moviesController.addWatchedDirect,
)

routes.get('/movies/search', authenticator, moviesController.searchMovies)

export default routes
