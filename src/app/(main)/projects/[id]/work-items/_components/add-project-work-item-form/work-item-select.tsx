import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { WorkItemDefinitionDTO } from "@/lib/types/work-item";

interface WorkItemSelectProps {
    definitions: WorkItemDefinitionDTO[];
    onValueChange: (value: string) => void;
    defaultValue?: string;
}

export function WorkItemSelect({
    definitions,
    onValueChange,
    defaultValue,
}: WorkItemSelectProps) {
    return (
        <Select
            name="workItemId"
            onValueChange={onValueChange}
            value={defaultValue}
        >
            <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select a work item" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Work Items</SelectLabel>
                    {definitions.map((def) => (
                        <SelectItem
                            className="cursor-pointer"
                            key={def.id}
                            value={def.id}
                        >
                            {def.itemNo} - {def.description ?? "No description"}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
