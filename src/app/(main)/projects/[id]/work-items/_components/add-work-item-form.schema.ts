import { z } from "zod";

export const createProjectWorkItemSchema = z.object({
    workItemId: z.string().uuid("Invalid Work Item ID"),
    quantity: z.coerce
        .number({
            required_error: "Contract Cost is required",
            invalid_type_error: "Contract Cost must be a number",
        })
        .positive("Contract Cost must be a positive number"),
});
