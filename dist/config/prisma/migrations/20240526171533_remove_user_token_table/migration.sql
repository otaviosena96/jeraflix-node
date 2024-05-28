/*
  Warnings:

  - Added the required column `favorite` to the `profile_movie_favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile_movie_favorite` ADD COLUMN `favorite` BOOLEAN NOT NULL;
