/*
  Warnings:

  - Added the required column `label` to the `profile_movie_favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile_movie_favorite` ADD COLUMN `label` VARCHAR(191) NOT NULL;
