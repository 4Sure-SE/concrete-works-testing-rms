import { z } from "zod";

export const updateProjectSchema = z.object({
    contractId: z
        .string()
        .trim()
        .min(1, "Contract ID is required")
        .max(75, "Contract ID cannot exceed 75 characters")
        .optional(),
    contractName: z
        .string()
        .trim()
        .min(1, "Contract Name is required")
        .max(90, "Contract Name cannot exceed 90 characters")
        .optional(),
    contractor: z
        .string()
        .trim()
        .min(1, "Contractor is required")
        .max(90, "Contractor name cannot exceed 90 characters")
        .optional(),
    location: z
        .string()
        .trim()
        .max(75, "Location cannot exceed 75 characters")
        .optional()
        .nullable(),
    dateStarted: z.coerce
        .date({
            required_error: "Date Started is required",
            invalid_type_error: "Invalid date format",
        })
        .optional(),
    materialsEngineer: z
        .string()
        .trim()
        .min(1, "Materials Engineer is required")
        .max(75, "Materials Engineer name cannot exceed 75 characters")
        .optional(),
    limits: z
        .string()
        .trim()
        .max(80, "Limits cannot exceed 80 characters")
        .optional()
        .nullable(),
    contractCost: z.coerce
        .number({
            required_error: "Contract Cost is required",
            invalid_type_error: "Contract Cost must be a number",
        })
        .positive("Contract Cost must be a positive number")
        .max(10_000_000_000, "Contract Cost cannot exceed 10 billion")
        .optional(),
});
