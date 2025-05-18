import { FormPageSkeleton } from "../_components/project-form/project-form-skeleton";

export default function NewProjectPageSkeleton() {
    return (
        <FormPageSkeleton
            numberOfFields={8}
            hasLeftControl={true}
        />
    );
}
