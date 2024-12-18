-- AlterTable

ALTER TABLE `activity` DROP COLUMN `description`,
    DROP COLUMN `title`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `distance` DOUBLE NOT NULL,
    ADD COLUMN `environment` VARCHAR(191) NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `url` VARCHAR(191) NOT NULL,
    MODIFY `type` VARCHAR(191) NOT NULL;
