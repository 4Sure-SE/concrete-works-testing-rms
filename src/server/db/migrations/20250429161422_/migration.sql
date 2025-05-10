-- AlterTable
ALTER TABLE "work_item_material" ADD COLUMN     "static_quantity" DECIMAL(10,2),
ALTER COLUMN "quantity_per_unit" DROP NOT NULL;
