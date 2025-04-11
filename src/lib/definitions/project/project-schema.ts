import { z } from "zod";

// zod validation schema
export const projectFormSchema = z.object({
    contractId: z
        .string()
        .trim()
        .min(1, "Contract ID is required")
        .max(50, "Contract ID cannot exceed 50 characters"),
    contractName: z
        .string()
        .trim()
        .min(1, "Contract Name is required")
        .max(100, "Contract Name cannot exceed 100 characters"),
    contractor: z
        .string()
        .trim()
        .min(1, "Contractor is required")
        .max(100, "Contractor name cannot exceed 100 characters"),
    location: z
        .string()
        .trim()
        .max(100, "Location cannot exceed 100 characters")
        .transform((val) => (val === "" ? null : val)) // transform empty string to null after parsing
        .optional(),
    dateStarted: z
        .string()
        .min(1, "Date Started is required")
        .refine((date) => !isNaN(Date.parse(date)), {
            message: "Please enter a valid date",
        }),
    materialsEngineer: z
        .string()
        .trim()
        .min(1, "Materials Engineer is required")
        .max(100, "Materials Engineer name cannot exceed 100 characters"),
    limits: z
        .string()
        .trim()
        .max(500, "Limits cannot exceed 500 characters")
        .transform((val) => (val === "" ? null : val))
        .optional(),
});
