import type { FieldConfig, FormField } from "@/lib/types/form.types";
import type { UpdateProjectDTO } from "@/lib/types/project/project.types";

// field details of the project form
export const updateProjectFormConfig: Record<
    FormField<UpdateProjectDTO>,
    FieldConfig<UpdateProjectDTO>
> = {
    contractId: {
        name: "contractId",
        label: "Contract ID",
        placeholder: "Enter contract ID",
        default: "",
        isOptional: true,
    },
    contractName: {
        name: "contractName",
        label: "Contract Name",
        placeholder: "Enter contract name",
        default: "",
        isOptional: true,
    },
    contractor: {
        name: "contractor",
        label: "Contractor",
        placeholder: "Enter contractor name",
        default: "",
        isOptional: true,
    },
    location: {
        name: "location",
        label: "Location",
        placeholder: "Enter location",
        default: "Iloilo",
        isOptional: true,
    },
    dateStarted: {
        name: "dateStarted",
        label: "Date Started",
        placeholder: "Select date",
        type: "date",
        default: new Date(),
        isOptional: true,
    },
    materialsEngineer: {
        name: "materialsEngineer",
        label: "Materials Engineer",
        placeholder: "Enter materials engineer name",
        default: "",
        isOptional: true,
    },
    limits: {
        name: "limits",
        label: "Limits",
        placeholder: "Enter limits",
        type: "textarea",
        default: "",
        isOptional: true,
    },
    contractCost: {
        name: "contractCost",
        label: "Contract Cost",
        placeholder: "Enter contract cost",
        type: "number",
        default: 0,
        isOptional: true,
    },
} as const;
