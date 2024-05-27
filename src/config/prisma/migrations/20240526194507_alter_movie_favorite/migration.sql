/*
  Warnings:

  - You are about to drop the column `profileId` on the `profile_movie_favorite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tmdbId]` on the table `profile_movie_favorite` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profile_id` to the `profile_movie_favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profile_movie_favorite` DROP FOREIGN KEY `profile_movie_favorite_profileId_fkey`;

-- DropIndex
DROP INDEX `profile_movie_favorite_profileId_tmdbId_key` ON `profile_movie_favorite`;

-- AlterTable
ALTER TABLE `profile_movie_favorite` DROP COLUMN `profileId`,
    ADD COLUMN `profile_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `profile_movie_favorite_tmdbId_key` ON `profile_movie_favorite`(`tmdbId`);

-- AddForeignKey
ALTER TABLE `profile_movie_favorite` ADD CONSTRAINT `profile_movie_favorite_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
