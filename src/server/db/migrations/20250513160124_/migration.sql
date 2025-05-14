/*
  Warnings:

  - Made the column `file_type` on table `material_test_record` required. This step will fail if there are existing NULL values in that column.
  - Made the column `file_size` on table `material_test_record` required. This step will fail if there are existing NULL values in that column.
  - Made the column `file_type` on table `work_item_test_record` required. This step will fail if there are existing NULL values in that column.
  - Made the column `file_size` on table `work_item_test_record` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "material_test_record" ALTER COLUMN "file_type" SET NOT NULL,
ALTER COLUMN "file_size" SET NOT NULL;

-- AlterTable
ALTER TABLE "work_item_test_record" ALTER COLUMN "file_type" SET NOT NULL,
ALTER COLUMN "file_size" SET NOT NULL;
