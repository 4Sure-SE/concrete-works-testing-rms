/*
  Warnings:

  - A unique constraint covering the columns `[contract_id]` on the table `project` will be added. If there are existing duplicate values, this will fail.

*/
-- DropEnum
DROP TYPE "test_type";

-- CreateIndex
CREATE UNIQUE INDEX "project_contract_id_key" ON "project"("contract_id");
