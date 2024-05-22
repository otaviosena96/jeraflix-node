import { UpdateUserDTO } from '../../../../models/domain/dtos'
import { IUser } from '../../../../models/domain/entities'
import { CreateUserDTO } from '../../../../models/domain/dtos'

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<IUser>
  update(id: string, user: UpdateUserDTO): Promise<IUser>
  findById(id: string): Promise<IUser | null>
}
