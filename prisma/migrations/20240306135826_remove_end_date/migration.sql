/*
  Warnings:

  - You are about to drop the column `endDate` on the `courseenrolment` table. All the data in the column will be lost.
  - Added the required column `courseDescription` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `courseDescription` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `courseenrolment` DROP COLUMN `endDate`;
