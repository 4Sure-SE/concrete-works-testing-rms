import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";

export type HeaderProps = {
    withSidebarTrigger?: boolean;
    title: string;
};

function Header({ withSidebarTrigger, title }: HeaderProps) {
    return (
        <header className="flex h-16 shrink-0 items-center gap-4 border-b px-4">
            {withSidebarTrigger && (
                <>
                    <SidebarTrigger className="cursor-pointer" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 h-4"
                    />
                </>
            )}
            <h1 className="text-pri text-lg font-semibold">{title}</h1>
        </header>
    );
}

export default Header;
