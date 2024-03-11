/*
  Warnings:

  - Added the required column `videoUrl` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `videoUrl` VARCHAR(191) NOT NULL;
