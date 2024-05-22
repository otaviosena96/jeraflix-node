import { inject, injectable } from 'tsyringe'
import { CreateUserDTO } from '../../../models/domain/dtos'
import { IUserRepository } from '../../../models/repositories/IUserRepository'
import { IUser } from '../../../models/domain/entities'

@injectable()
export default class UserServiceCrud {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async create(data: CreateUserDTO): Promise<IUser> {
    return this.userRepository.create(data)
  }
}
