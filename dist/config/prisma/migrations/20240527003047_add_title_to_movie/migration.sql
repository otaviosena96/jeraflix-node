/*
  Warnings:

  - Added the required column `title` to the `profile_movie_favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile_movie_favorite` ADD COLUMN `title` VARCHAR(191) NOT NULL;
