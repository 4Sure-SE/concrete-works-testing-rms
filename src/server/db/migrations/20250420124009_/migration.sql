/*
  Warnings:

  - You are about to alter the column `contract_cost` on the `project` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,2)`.
  - You are about to alter the column `test_quantity` on the `work_item_test` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Decimal(5,0)`.

*/
-- AlterTable
ALTER TABLE "material" RENAME CONSTRAINT "materials_pkey" TO "material_pkey";

-- AlterTable
ALTER TABLE "project" RENAME CONSTRAINT "projects_pkey" TO "project_pkey"; 

-- AlterTable 
ALTER TABLE "project" ALTER COLUMN "contract_cost" SET DATA TYPE DECIMAL(18,2);

-- AlterTable
ALTER TABLE "project_material" RENAME CONSTRAINT "project_materials_pkey" TO "project_material_pkey";

-- AlterTable
ALTER TABLE "project_material_test" RENAME CONSTRAINT "project_material_tests_pkey" TO "project_material_test_pkey";

-- AlterTable
ALTER TABLE "project_work_item" RENAME CONSTRAINT "project_work_items_pkey" TO "project_work_item_pkey";

-- AlterTable
ALTER TABLE "project_work_item_test" RENAME CONSTRAINT "project_work_item_tests_pkey" TO "project_work_item_test_pkey";

-- AlterTable
ALTER TABLE "test" RENAME CONSTRAINT "tests_pkey" TO "test_pkey";

-- AlterTable
ALTER TABLE "unit" RENAME CONSTRAINT "units_pkey" TO "unit_pkey";

-- AlterTable
ALTER TABLE "work_item" RENAME CONSTRAINT "work_items_pkey" TO "work_item_pkey";

-- AlterTable
ALTER TABLE "work_item_material" RENAME CONSTRAINT "work_item_materials_pkey" TO "work_item_material_pkey";

-- AlterTable
ALTER TABLE "work_item_test" RENAME CONSTRAINT "work_item_tests_pkey" TO "work_item_test_pkey";

-- AlterTable
ALTER TABLE "work_item_test" ALTER COLUMN "test_quantity" SET DATA TYPE DECIMAL(5,0);

-- CreateTable
CREATE TABLE "material_test_record" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "project_material_test_id" UUID NOT NULL,
    "record_identifier" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_type" TEXT,
    "file_size" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_test_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_item_test_record" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "project_work_item_test_id" UUID NOT NULL,
    "record_identifier" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_type" TEXT,
    "file_size" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_item_test_record_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "material_test_record_record_identifier_key" ON "material_test_record"("record_identifier");

-- CreateIndex
CREATE UNIQUE INDEX "work_item_test_record_record_identifier_key" ON "work_item_test_record"("record_identifier");

-- RenameForeignKey
ALTER TABLE "material" RENAME CONSTRAINT "materials_unit_id_fkey" TO "material_unit_id_fkey";

-- RenameForeignKey
ALTER TABLE "project_material" RENAME CONSTRAINT "project_materials_material_id_fkey" TO "project_material_material_id_fkey";

-- RenameForeignKey
ALTER TABLE "project_material" RENAME CONSTRAINT "project_materials_project_work_item_id_fkey" TO "project_material_project_work_item_id_fkey";

-- RenameForeignKey
ALTER TABLE "project_material_test" RENAME CONSTRAINT "project_material_tests_project_material_id_fkey" TO "project_material_test_project_material_id_fkey";

-- RenameForeignKey
ALTER TABLE "project_material_test" RENAME CONSTRAINT "project_material_tests_test_id_fkey" TO "project_material_test_test_id_fkey";

-- RenameForeignKey
ALTER TABLE "project_work_item" RENAME CONSTRAINT "project_work_items_project_id_fkey" TO "project_work_item_project_id_fkey";

-- RenameForeignKey
ALTER TABLE "project_work_item" RENAME CONSTRAINT "project_work_items_work_item_id_fkey" TO "project_work_item_work_item_id_fkey";

-- RenameForeignKey
ALTER TABLE "project_work_item_test" RENAME CONSTRAINT "project_work_item_tests_project_work_item_id_fkey" TO "project_work_item_test_project_work_item_id_fkey";

-- RenameForeignKey
ALTER TABLE "project_work_item_test" RENAME CONSTRAINT "project_work_item_tests_test_id_fkey" TO "project_work_item_test_test_id_fkey";

-- RenameForeignKey
ALTER TABLE "work_item" RENAME CONSTRAINT "work_items_unit_id_fkey" TO "work_item_unit_id_fkey";

-- RenameForeignKey
ALTER TABLE "work_item_material" RENAME CONSTRAINT "work_item_materials_material_id_fkey" TO "work_item_material_material_id_fkey";

-- RenameForeignKey
ALTER TABLE "work_item_material" RENAME CONSTRAINT "work_item_materials_work_item_id_fkey" TO "work_item_material_work_item_id_fkey";

-- RenameForeignKey
ALTER TABLE "work_item_test" RENAME CONSTRAINT "work_item_tests_test_id_fkey" TO "work_item_test_test_id_fkey";

-- RenameForeignKey
ALTER TABLE "work_item_test" RENAME CONSTRAINT "work_item_tests_work_item_id_fkey" TO "work_item_test_work_item_id_fkey";

-- AddForeignKey
ALTER TABLE "material_test_record" ADD CONSTRAINT "material_test_record_project_material_test_id_fkey" FOREIGN KEY ("project_material_test_id") REFERENCES "project_material_test"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_item_test_record" ADD CONSTRAINT "work_item_test_record_project_work_item_test_id_fkey" FOREIGN KEY ("project_work_item_test_id") REFERENCES "project_work_item_test"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- RenameIndex
ALTER INDEX "tests_name_key" RENAME TO "test_name_key";

-- RenameIndex
ALTER INDEX "units_abbreviation_key" RENAME TO "unit_abbreviation_key";

-- RenameIndex
ALTER INDEX "units_name_key" RENAME TO "unit_name_key";

-- RenameIndex
ALTER INDEX "work_items_item_no_key" RENAME TO "work_item_item_no_key";

-- RenameIndex
ALTER INDEX "work_item_materials_work_item_id_material_id_key" RENAME TO "work_item_material_work_item_id_material_id_key";

-- RenameIndex
ALTER INDEX "work_item_tests_work_item_id_test_id_key" RENAME TO "work_item_test_work_item_id_test_id_key";
