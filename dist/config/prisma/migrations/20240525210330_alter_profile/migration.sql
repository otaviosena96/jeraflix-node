/*
  Warnings:

  - You are about to drop the column `userId` on the `profiles` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profiles` DROP FOREIGN KEY `profiles_userId_fkey`;

-- AlterTable
ALTER TABLE `profiles` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `profiles` ADD CONSTRAINT `profiles_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
