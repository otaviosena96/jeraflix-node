import { CreateUserDTO, UpdateUserDTO } from '../domain/dtos'
import { IUser, IUserToken } from '../domain/entities'

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<IUser>
  update(id: number, user: UpdateUserDTO): Promise<IUser>
  findById(id: number): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  storeToken(userId: number, token: string, expiresAt: Date): Promise<void>
  auth(token: string): Promise<IUserToken | null>
}
