import type { FieldConfig, FormField } from "@/lib/types/form.types";
import type { CreateProjectDTO } from "@/lib/types/project";

// field details of the project form
export const createProjectFormConfig: Record<
    FormField<CreateProjectDTO>,
    FieldConfig<CreateProjectDTO>
> = {
    contractId: {
        name: "contractId",
        label: "Contract ID",
        placeholder: "Enter contract ID",
        default: "",
    },
    contractName: {
        name: "contractName",
        label: "Contract Name",
        placeholder: "Enter contract name",
        default: "",
    },
    contractor: {
        name: "contractor",
        label: "Contractor",
        placeholder: "Enter contractor name",
        default: "",
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
    },
    materialsEngineer: {
        name: "materialsEngineer",
        label: "Materials Engineer",
        placeholder: "Enter materials engineer name",
        default: "",
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
    },
} as const;

// generate an object of default values
export function getDefaultValues(): CreateProjectDTO {
    return Object.entries(createProjectFormConfig).reduce(
        (values, [key, config]) => {
            values[key as FormField<CreateProjectDTO>] = config.default ?? "";
            return values;
        },
        {} as Record<FormField<CreateProjectDTO>, unknown>,
    ) as CreateProjectDTO;
}
