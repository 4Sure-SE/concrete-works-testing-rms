import {
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuSkeleton,
} from "@/components/ui/sidebar";

function NavProjectListSkeleton() {
    return (
        <SidebarMenu>
            {Array.from({ length: 5 }).map((_, index) => (
                <SidebarMenuItem key={index}>
                    <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    );
}

export default NavProjectListSkeleton;
