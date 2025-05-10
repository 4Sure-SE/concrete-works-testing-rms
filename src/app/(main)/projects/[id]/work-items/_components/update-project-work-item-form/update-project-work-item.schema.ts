import { z } from "zod";

export const updateProjectWorkItemSchema = z.object({
    quantity: z.coerce
        .number({
            required_error: "Quantity is required",
        })
        .positive("Quantity must be a positive number")
        .max(10_000_000_000, "Quantity cannot exceed 10 billion"),
});
