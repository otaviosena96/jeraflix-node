export interface IMovieRepository {
  addToFavorite(data: any): Promise<any>
  findByTmdbId(id: number): Promise<any>
  getWishList(profile_id: number, page: number): Promise<any>
  findByProfileId(profile_id: number): Promise<any>
  findGenreByTmdbId(tmdbId: number): Promise<any>
}
