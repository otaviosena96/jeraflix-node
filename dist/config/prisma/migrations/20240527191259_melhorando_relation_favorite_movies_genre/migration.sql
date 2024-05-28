/*
  Warnings:

  - You are about to drop the column `tmdbId` on the `genres` table. All the data in the column will be lost.
  - You are about to drop the column `genre_tmdb_id` on the `profile_movie_favorite` table. All the data in the column will be lost.
  - Added the required column `genre_id` to the `profile_movie_favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profile_movie_favorite` DROP FOREIGN KEY `profile_movie_favorite_genre_tmdb_id_fkey`;

-- DropIndex
DROP INDEX `genres_tmdbId_key` ON `genres`;

-- AlterTable
ALTER TABLE `genres` DROP COLUMN `tmdbId`;

-- AlterTable
ALTER TABLE `profile_movie_favorite` DROP COLUMN `genre_tmdb_id`,
    ADD COLUMN `genre_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `profile_movie_favorite` ADD CONSTRAINT `profile_movie_favorite_genre_id_fkey` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
