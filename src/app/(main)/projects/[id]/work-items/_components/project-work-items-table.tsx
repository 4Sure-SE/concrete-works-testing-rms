import { FileText, Trash2 } from "lucide-react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { ProjectWorkItemDTO } from "@/lib/types/project-work-item/project-work-item.types";

interface ProjectWorkItemsTableProps {
    data: ProjectWorkItemDTO[];
}

export function ProjectWorkItemsTable({ data }: ProjectWorkItemsTableProps) {
    if (!data || data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <FileText className="mb-2 h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">No work items</h3>
                <p className="text-sm text-muted-foreground">
                    There are no work items added to this project yet.
                </p>
            </div>
        );
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Item No.</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="w-[150px]">Quantity</TableHead>
                    <TableHead className="w-[100px]">Unit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">
                            {item.itemNo}
                        </TableCell>
                        <TableCell>
                            {item.description ?? "No description"}
                        </TableCell>
                        <TableCell>{item.quantity.toLocaleString()}</TableCell>
                        <TableCell>{item.unitAbbreviation}</TableCell>
                        <TableCell className="text-right">
                            <Trash2 className="h-4 w-4 text-red-500" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
