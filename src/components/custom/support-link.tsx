import Link from "next/link";

export function SupportLink() {
    return (
        <p className="text-sm text-muted-foreground">
            If the problem persists, please contact{" "}
            <Link
                href="mailto:joseearronn@gmail.com"
                className="font-medium underline underline-offset-4 hover:text-foreground"
            >
                support
            </Link>
            .
        </p>
    );
}
