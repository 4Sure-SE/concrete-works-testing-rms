import type { ProjectWorkItemDTO } from "@/lib/types/project-work-item/project-work-item.types";
import type { ProjectWorkItemPayload } from "@/server/data-access/project-work-item/project-work-item.payloads";

export const projectWorkItemToDTO = (
    projectWorkItem: ProjectWorkItemPayload,
): ProjectWorkItemDTO => {
    return {
        id: projectWorkItem.id,
        itemNo: projectWorkItem.workItem.itemNo,
        description: projectWorkItem.workItem.description,
        quantity: projectWorkItem.quantity.toNumber(),
        unitAbbreviation: projectWorkItem.workItem.unit.abbreviation,
    };
};
