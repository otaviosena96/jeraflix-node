import { CreateUserDTO, UpdateUserDTO } from '../domain/dtos'
import { IUser } from '../domain/entities'

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<IUser>
  update(id: number, user: UpdateUserDTO): Promise<IUser>
  findById(id: number): Promise<IUser | null>
}
