import { container } from 'tsyringe'

import { IUserRepository } from '../../models/repositories/IUserRepository'
import { PrismaUserRepository } from '../../modules/users/repositories/PrismaUserRepository'
import { IProfileRepository } from '../../models/repositories/IProfileRepository'
import { PrismaProfileRepository } from '../../modules/profiles/repositories/PrismaProfileRepository'
import { PrismaMovieRepository } from '../../modules/movies/repositories/PrismaMovieRepository'
import { IMovieRepository } from '../../models/repositories/IMovieRepository'

container.registerSingleton<IUserRepository>(
  'UserRepository',
  PrismaUserRepository,
)

container.registerSingleton<IProfileRepository>(
  'ProfileRepository',
  PrismaProfileRepository,
)

container.registerSingleton<IMovieRepository>(
  'MovieRepository',
  PrismaMovieRepository,
)
