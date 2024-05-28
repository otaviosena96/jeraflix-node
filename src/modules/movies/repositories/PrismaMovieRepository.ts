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
      include: {
        genre: true, // Isso vai incluir os dados do gênero
      },
    })
    const totalCount = await prisma.profileMovieFavorite.count({
      where: {
        profile_id,
        favorite: true,
      },
    })

    return { wishlist, totalCount }
  }
  async getWatched(profile_id: number, page: number): Promise<any> {
    const pageSize = 20
    const skip = (page - 1) * pageSize
    const wishlist = await prisma.profileMovieFavorite.findMany({
      where: {
        profile_id,
        watched: true,
      },
      skip,
      take: pageSize,
      include: {
        genre: true, // Isso vai incluir os dados do gênero
      },
    })
    const totalCount = await prisma.profileMovieFavorite.count({
      where: {
        profile_id,
        watched: true,
      },
    })

    return { wishlist, totalCount }
  }
  async toogleFavorite(data: CreateMovieFavorite): Promise<any> {
    console.log(data)
    await prisma.profileMovieFavorite.upsert({
      where: {
        tmdbId_profile_id: {
          tmdbId: data.tmdbId,
          profile_id: data.profile_id,
        },
      },
      update: {
        favorite: data.favorite,
      },
      create: {
        ...data,
      },
    })
  }
  async toogleWatched(data: CreateMovieFavorite): Promise<any> {
    await prisma.profileMovieFavorite.upsert({
      where: {
        tmdbId_profile_id: {
          tmdbId: data.tmdbId,
          profile_id: data.profile_id,
        },
      },
      update: {
        watched: data.watched,
      },
      create: {
        ...data,
      },
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
  async findGenreById(id: number): Promise<any> {
    return await prisma.genres.findFirst({
      where: { id },
    })
  }

  async find(profile_id: number, tmdb_id: number): Promise<any> {
    return await prisma.profileMovieFavorite.findFirst({
      where: {
        profile_id,
        tmdbId: tmdb_id,
      },
    })
  }
}
