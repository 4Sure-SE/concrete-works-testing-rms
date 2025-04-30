import { z } from "zod";

export const createProjectWorkItemSchema = z.object({
    workItemId: z.string().uuid("Invalid Work Item ID"),
    quantity: z.coerce
        .number({
            required_error: "Quantity is required",
        })
        .positive("Quantity must be a positive number"),
});
