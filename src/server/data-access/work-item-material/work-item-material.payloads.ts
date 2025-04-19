import type { WorkItemMaterial } from "@prisma/client";

export type WorkItemMaterialDefinitionPayload = Pick<
    WorkItemMaterial,
    "materialId" | "quantityPerUnit" | "id"
>;
