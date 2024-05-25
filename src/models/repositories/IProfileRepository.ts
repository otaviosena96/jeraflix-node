import { CreateProfileDTO, UpdateProfileDTO } from '../domain/dtos'
import { IProfile } from '../domain/entities'

export interface IProfileRepository {
  create(user: CreateProfileDTO): Promise<IProfile>
  update(id: number, user: UpdateProfileDTO): Promise<IProfile>
  delete(id: number): Promise<void>
  findByUserId(userId: number): Promise<IProfile[] | null>
  findByName(name: string, user_id: number): Promise<IProfile | null>
}
