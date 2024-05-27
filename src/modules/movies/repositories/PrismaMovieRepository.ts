import { CreateMovieFavorite } from '../../../models/domain/dtos'
import prisma from '../../../config/prisma/prisma'
import { IMovieRepository } from '../../../models/repositories/IMovieRepository'

export class PrismaMovieRepository implements IMovieRepository {
  async getWishList(profile_id: number, page: number): Promise<any> {
    const pageSize = 20
    const skip = (page - 1) * pageSize
    const wishlist = await prisma.profileMovieFavorite.findMany({
      where: {
        profile_id,
        favorite: true,
      },
      skip,
      take: pageSize,
    })
    const totalCount = await prisma.profileMovieFavorite.count({
      where: {
        profile_id,
        favorite: true,
      },
    })

    return { wishlist, totalCount }
  }
  async addToFavorite(data: CreateMovieFavorite): Promise<any> {
    await prisma.profileMovieFavorite.create({
      data,
    })
  }
  async findByTmdbId(id: number): Promise<any> {
    return await prisma.profileMovieFavorite.findFirst({
      where: { tmdbId: id },
    })
  }
  async findByProfileId(profile_id: number): Promise<any> {
    return await prisma.profileMovieFavorite.findMany({
      where: { profile_id },
    })
  }
  async findGenreByTmdbId(tmdbId: number): Promise<any> {
    return await prisma.genres.findFirst({
      where: { tmdbId },
    })
  }
}
