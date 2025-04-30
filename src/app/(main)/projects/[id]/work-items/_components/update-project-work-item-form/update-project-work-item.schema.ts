import { z } from "zod";

export const updateProjectWorkItemSchema = z.object({
    quantity: z.coerce
        .number({
            required_error: "Quantity is required",
        })
        .positive("Quantity must be a positive number"),
});
