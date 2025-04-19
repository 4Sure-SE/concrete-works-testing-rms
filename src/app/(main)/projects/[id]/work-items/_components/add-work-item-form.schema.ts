import { z } from "zod";

export const createProjectWorkItemSchema = z.object({
    workItemId: z.string().uuid("Invalid Work Item ID"),
    quantity: z.coerce
        .number({
            required_error: "Quantity is required",
            invalid_type_error: "Quantity must be a number",
        })
        .positive("Quantity must be a positive number"),
});
