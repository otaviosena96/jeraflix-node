import { CreateProfileDTO, UpdateProfileDTO } from '../../../models/domain/dtos'
import prisma from '../../../config/prisma/prisma'
import { IProfileRepository } from '../../../models/repositories/IProfileRepository'
import { IProfile } from '../../../models/domain/entities'

export class PrismaProfileRepository implements IProfileRepository {
  update(id: number, user: UpdateProfileDTO): Promise<IProfile> {
    throw new Error('Method not implemented.')
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findByUserId(userId: number): Promise<IProfile[] | null> {
    throw new Error('Method not implemented.')
  }
  async create(data: CreateProfileDTO): Promise<IProfile> {
    const createdProfile = await prisma.profile.create({
      data,
    })
    return createdProfile
  }
}
