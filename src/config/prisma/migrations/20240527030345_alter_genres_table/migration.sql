/*
  Warnings:

  - You are about to drop the column `genre_id` on the `profile_movie_favorite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tmdbId]` on the table `genres` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `genre_tmdb_id` to the `profile_movie_favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profile_movie_favorite` DROP FOREIGN KEY `profile_movie_favorite_genre_id_fkey`;

-- AlterTable
ALTER TABLE `profile_movie_favorite` DROP COLUMN `genre_id`,
    ADD COLUMN `genre_tmdb_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `genres_tmdbId_key` ON `genres`(`tmdbId`);

-- AddForeignKey
ALTER TABLE `profile_movie_favorite` ADD CONSTRAINT `profile_movie_favorite_genre_tmdb_id_fkey` FOREIGN KEY (`genre_tmdb_id`) REFERENCES `genres`(`tmdbId`) ON DELETE RESTRICT ON UPDATE CASCADE;
