CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 

-- CreateEnum
CREATE TYPE "test_status" AS ENUM ('not_started', 'ongoing', 'completed');

-- CreateEnum
CREATE TYPE "test_type" AS ENUM ('work_item', 'material');

-- CreateTable
CREATE TABLE "material" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "unit_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "contract_id" TEXT NOT NULL,
    "contract_name" TEXT NOT NULL,
    "contractor" TEXT NOT NULL,
    "limits" TEXT,
    "location" TEXT,
    "date_started" DATE NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "materials_engineer" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_material" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "project_work_item_id" UUID NOT NULL,
    "material_id" UUID NOT NULL,
    "quantity" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_material_test" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "test_id" UUID NOT NULL,
    "project_material_id" UUID NOT NULL,
    "on_file" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_material_tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_work_item" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "project_id" UUID NOT NULL,
    "work_item_id" UUID NOT NULL,
    "quantity" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_work_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_work_item_test" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "test_id" UUID NOT NULL,
    "project_work_item_id" UUID NOT NULL,
    "on_file" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_work_item_tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unit" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_item" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "item_no" TEXT NOT NULL,
    "description" TEXT,
    "unit_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_item_material" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "work_item_id" UUID NOT NULL,
    "material_id" UUID NOT NULL,
    "quantity_per_unit" DECIMAL(10,6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_item_materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_item_material_test" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "work_item_material_id" UUID NOT NULL,
    "test_id" UUID NOT NULL,
    "units_per_test" DECIMAL(16,6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_item_material_test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_item_test" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "work_item_id" UUID NOT NULL,
    "test_id" UUID NOT NULL,
    "test_quantity" DECIMAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "work_item_tests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tests_name_key" ON "test"("name");

-- CreateIndex
CREATE UNIQUE INDEX "units_name_key" ON "unit"("name");

-- CreateIndex
CREATE UNIQUE INDEX "units_abbreviation_key" ON "unit"("abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "work_items_item_no_key" ON "work_item"("item_no");

-- CreateIndex
CREATE UNIQUE INDEX "work_item_materials_work_item_id_material_id_key" ON "work_item_material"("work_item_id", "material_id");

-- CreateIndex
CREATE UNIQUE INDEX "work_item_material_test_work_item_material_id_test_id_key" ON "work_item_material_test"("work_item_material_id", "test_id");

-- CreateIndex
CREATE UNIQUE INDEX "work_item_tests_work_item_id_test_id_key" ON "work_item_test"("work_item_id", "test_id");

-- AddForeignKey
ALTER TABLE "material" ADD CONSTRAINT "materials_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_material" ADD CONSTRAINT "project_materials_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_material" ADD CONSTRAINT "project_materials_project_work_item_id_fkey" FOREIGN KEY ("project_work_item_id") REFERENCES "project_work_item"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_material_test" ADD CONSTRAINT "project_material_tests_project_material_id_fkey" FOREIGN KEY ("project_material_id") REFERENCES "project_material"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_material_test" ADD CONSTRAINT "project_material_tests_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "test"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_work_item" ADD CONSTRAINT "project_work_items_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_work_item" ADD CONSTRAINT "project_work_items_work_item_id_fkey" FOREIGN KEY ("work_item_id") REFERENCES "work_item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_work_item_test" ADD CONSTRAINT "project_work_item_tests_project_work_item_id_fkey" FOREIGN KEY ("project_work_item_id") REFERENCES "project_work_item"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_work_item_test" ADD CONSTRAINT "project_work_item_tests_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "test"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_item" ADD CONSTRAINT "work_items_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_item_material" ADD CONSTRAINT "work_item_materials_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "material"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_item_material" ADD CONSTRAINT "work_item_materials_work_item_id_fkey" FOREIGN KEY ("work_item_id") REFERENCES "work_item"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_item_material_test" ADD CONSTRAINT "work_item_material_test_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_item_material_test" ADD CONSTRAINT "work_item_material_test_work_item_material_id_fkey" FOREIGN KEY ("work_item_material_id") REFERENCES "work_item_material"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_item_test" ADD CONSTRAINT "work_item_tests_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_item_test" ADD CONSTRAINT "work_item_tests_work_item_id_fkey" FOREIGN KEY ("work_item_id") REFERENCES "work_item"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
