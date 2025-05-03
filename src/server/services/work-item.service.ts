import "server-only";

import { workItemToDTO } from "@/lib/adapters/work-item";
import type { WorkItemDefinitionDTO } from "@/lib/types/work-item";
import { getWorkItemList } from "../data-access/work-item";

export const WorkItemService = {
    // get list of work item definitions
    async getWorkItemDefinitionList(): Promise<WorkItemDefinitionDTO[]> {
        console.log(`[Service] Getting work item list`);

        const workItemListPayload = await getWorkItemList();
        const dtoList = workItemListPayload
            .map(workItemToDTO)
            .filter((dto): dto is WorkItemDefinitionDTO => dto !== null);

        console.log(`[Service] Retrieved ${dtoList.length} work items`);
        return dtoList;
    },
};
