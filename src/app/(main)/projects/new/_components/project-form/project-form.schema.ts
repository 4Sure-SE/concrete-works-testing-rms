import { z } from "zod";

export const createProjectSchema = z.object({
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
        .optional()
        .nullable(),
    dateStarted: z.coerce.date({
        required_error: "Date Started is required",
        invalid_type_error: "Invalid date format",
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
        .optional()
        .nullable(),
    contractCost: z.coerce
        .number({
            required_error: "Contract Cost is required",
            invalid_type_error: "Contract Cost must be a number",
        })
        .positive("Contract Cost must be a positive number"),
});
