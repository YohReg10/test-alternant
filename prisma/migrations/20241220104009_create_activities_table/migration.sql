-- CreateTable
CREATE TABLE `Activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `distance` VARCHAR(191) NOT NULL,
    `environment` VARCHAR(191) NOT NULL,
    `sensation` INTEGER NOT NULL,
    `url_site` VARCHAR(191) NOT NULL,
    `url_img` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
