import { inject, injectable } from 'tsyringe'
import { CreateUserDTO, LoginDto } from '../../../models/domain/dtos'
import { IUserRepository } from '../../../models/repositories/IUserRepository'
import { IUser } from '../../../models/domain/entities'
import bcrypt from 'bcryptjs'

@injectable()
export default class UserServiceCrud {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async create(data: CreateUserDTO): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(data.password, 8)
    const userDataWithHashedPassword: CreateUserDTO = {
      ...data,
      password: hashedPassword,
    }

    return this.userRepository.create(userDataWithHashedPassword)
  }
}
