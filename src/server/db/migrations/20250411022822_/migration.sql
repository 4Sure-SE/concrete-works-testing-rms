/*
  Warnings:

  - Added the required column `contract_cost` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "project" ADD COLUMN     "contract_cost" DECIMAL(65,30) NOT NULL;
