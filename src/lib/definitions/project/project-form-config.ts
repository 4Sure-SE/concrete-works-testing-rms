import { formatDate } from "@/lib/utils";
import type { FieldConfig, FormField } from "../form.types";
import type { ProjectFormData } from "./project.types";

// field details of the project form
export const projectFormConfig: Record<
    FormField<ProjectFormData>,
    FieldConfig<ProjectFormData>
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
        default: formatDate(new Date()) ?? "",
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
} as const;

// generate an object of default values
export function getDefaultValues(): ProjectFormData {
    return Object.entries(projectFormConfig).reduce(
        (values, [key, config]) => {
            values[key as FormField<ProjectFormData>] = config.default ?? "";
            return values;
        },
        {} as Record<FormField<ProjectFormData>, string>,
    ) as ProjectFormData;
}
