export interface IMovieRepository {
  toogleFavorite(data: any): Promise<any>
  toogleWatched(data: any): Promise<any>
  findByTmdbId(id: number): Promise<any>
  getWishList(profile_id: number, page: number): Promise<any>
  getWatched(profile_id: number, page: number): Promise<any>
  findByProfileId(profile_id: number): Promise<any>
  findGenreById(id: number): Promise<any>
}
