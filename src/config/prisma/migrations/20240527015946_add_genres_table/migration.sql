/*
  Warnings:

  - You are about to drop the column `label` on the `profile_movie_favorite` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `profile_movie_favorite` DROP COLUMN `label`,
    ADD COLUMN `genre_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `Genres` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `tmdbId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `profile_movie_favorite` ADD CONSTRAINT `profile_movie_favorite_genre_id_fkey` FOREIGN KEY (`genre_id`) REFERENCES `Genres`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
