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
  findByUserId(user_id: number): Promise<IProfile[] | null> {
    return prisma.profile.findMany({
      where: { user_id },
    })
  }
  async create(data: CreateProfileDTO): Promise<IProfile> {
    return await prisma.profile.create({
      data,
    })
  }

  async findByName(name: string, user_id: number): Promise<IProfile | null> {
    return await prisma.profile.findFirst({ where: { name, user_id } })
  }
}
