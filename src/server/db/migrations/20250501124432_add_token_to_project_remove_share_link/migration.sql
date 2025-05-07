/*
  Warnings:

  - You are about to drop the `project_share_link` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[token]` on the table `project` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "project_share_link" DROP CONSTRAINT "project_share_link_projectId_fkey";

-- AlterTable
ALTER TABLE "project" ADD COLUMN     "token" TEXT;

-- DropTable
DROP TABLE "project_share_link";

-- CreateIndex
CREATE UNIQUE INDEX "project_token_key" ON "project"("token");
