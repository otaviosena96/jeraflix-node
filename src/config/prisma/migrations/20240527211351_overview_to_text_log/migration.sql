/*
  Warnings:

  - Made the column `overview` on table `profile_movie_favorite` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `profile_movie_favorite` MODIFY `overview` LONGTEXT NOT NULL;
