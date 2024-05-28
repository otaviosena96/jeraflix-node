/*
  Warnings:

  - A unique constraint covering the columns `[tmdbId,profile_id]` on the table `profile_movie_favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `profile_movie_favorite_tmdbId_profile_id_key` ON `profile_movie_favorite`(`tmdbId`, `profile_id`);
