import { inject, injectable } from 'tsyringe'
import {
  CreateProfileDTO,
  CreateUserDTO,
  LoginDto,
} from '../../../models/domain/dtos'
import { IUserRepository } from '../../../models/repositories/IUserRepository'
import { IProfile, IUser } from '../../../models/domain/entities'
import bcrypt from 'bcryptjs'
import { IProfileRepository } from '../../../models/repositories/IProfileRepository'
import { v4 } from 'uuid'

@injectable()
export default class ProfileServiceCrud {
  constructor(
    @inject('ProfileRepository')
    private profileRepository: IProfileRepository,
  ) {}

  public async create(data: CreateProfileDTO): Promise<any> {
    data.uuid = v4()
    return true
    /* return this.profileRepository.create() */
  }
}
