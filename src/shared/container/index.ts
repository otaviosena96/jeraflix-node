import { container } from 'tsyringe'

import { IUserRepository } from '../../models/repositories/IUserRepository'
import { PrismaUserRepository } from '../../modules/users/repositories/PrismaUserRepository'

container.registerSingleton<IUserRepository>(
  'UserRepository',
  PrismaUserRepository,
)
