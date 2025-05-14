/*
  Warnings:

  - You are about to drop the column `record_identifier` on the `material_test_record` table. All the data in the column will be lost.
  - You are about to drop the column `record_identifier` on the `work_item_test_record` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[storage_path]` on the table `material_test_record` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[storage_path]` on the table `work_item_test_record` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `storage_path` to the `material_test_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storage_path` to the `work_item_test_record` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "material_test_record_record_identifier_key";

-- DropIndex
DROP INDEX "work_item_test_record_record_identifier_key";

-- AlterTable
ALTER TABLE "material_test_record" DROP COLUMN "record_identifier",
ADD COLUMN     "storage_path" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "work_item_test_record" DROP COLUMN "record_identifier",
ADD COLUMN     "storage_path" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "material_test_record_storage_path_key" ON "material_test_record"("storage_path");

-- CreateIndex
CREATE UNIQUE INDEX "work_item_test_record_storage_path_key" ON "work_item_test_record"("storage_path");
