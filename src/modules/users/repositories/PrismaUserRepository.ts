import { injectable } from 'tsyringe'
import { PrismaClient } from '@prisma/client'
import { IUserRepository } from '../../../models/repositories/IUserRepository'
import { CreateUserDTO, UpdateUserDTO } from '../../../models/domain/dtos'
import { IUser } from '../../../models/domain/entities'

const prisma = new PrismaClient()

export class PrismaUserRepository implements IUserRepository {
  async create(data: CreateUserDTO): Promise<IUser> {
    const createdUser = await prisma.user.create({
      data: data,
    })
    return createdUser
  }

  async update(id: number, user: UpdateUserDTO): Promise<IUser> {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: user,
    })
    return updatedUser
  }

  async findById(id: number): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    })
    return user
  }
}
