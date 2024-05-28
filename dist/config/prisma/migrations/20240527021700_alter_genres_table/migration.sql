/*
  Warnings:

  - You are about to drop the `Genres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `profile_movie_favorite` DROP FOREIGN KEY `profile_movie_favorite_genre_id_fkey`;

-- DropTable
DROP TABLE `Genres`;

-- CreateTable
CREATE TABLE `genres` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `tmdbId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `profile_movie_favorite` ADD CONSTRAINT `profile_movie_favorite_genre_id_fkey` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
