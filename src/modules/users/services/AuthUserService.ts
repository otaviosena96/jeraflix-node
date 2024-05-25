import { inject, injectable } from 'tsyringe'
import { CreateUserDTO, LoginDto } from '../../../models/domain/dtos'
import { IUserRepository } from '../../../models/repositories/IUserRepository'
import { IUser, IUserToken } from '../../../models/domain/entities'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { AppError } from '../../utils/error'
import { v4 } from 'uuid'
@injectable()
export default class AuthUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async auth(token: string): Promise<IUserToken> {
    const userToken = await this.userRepository.auth(token)
    if (!userToken) {
      throw new AppError('Token inválido.')
    }
    return userToken
  }
}
