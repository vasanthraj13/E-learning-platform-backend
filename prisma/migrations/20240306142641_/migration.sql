/*
  Warnings:

  - You are about to drop the column `duration` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `postedBy` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `postedOn` on the `course` table. All the data in the column will be lost.
  - You are about to drop the `courseenrolment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `courseenrolment` DROP FOREIGN KEY `CourseEnrolment_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `courseenrolment` DROP FOREIGN KEY `CourseEnrolment_userId_fkey`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `duration`,
    DROP COLUMN `postedBy`,
    DROP COLUMN `postedOn`;

-- DropTable
DROP TABLE `courseenrolment`;

-- CreateTable
CREATE TABLE `courseEnrollment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `courseId` INTEGER NOT NULL,
    `joiningDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `courseEnrollment` ADD CONSTRAINT `courseEnrollment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `courseEnrollment` ADD CONSTRAINT `courseEnrollment_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
