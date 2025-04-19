import type { WorkItemDefinitionDTO } from "@/lib/types/work-item";
import type { WorkItemPayload } from "@/server/data-access/work-item/work-item.payloads";

export function workItemToDTO(
    item: WorkItemPayload | null,
): WorkItemDefinitionDTO | null {
    if (!item) return null;
    return {
        id: item.id,
        itemNo: item.itemNo,
        description: item.description,
        unitAbbreviation: item.unit.abbreviation,
    };
}
