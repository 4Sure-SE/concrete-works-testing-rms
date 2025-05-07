import { createClient } from "@/lib/supabase/middleware";
import { type NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/projects"];
const publicRoutes = [
    "/log-in",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
];
const shareRoutes = ["/share/projects"];

export async function middleware(request: NextRequest) {
    const { supabase, response } = createClient(request);

    // Check if user is authenticated
    const {
        data: { session },
    } = await supabase.auth.getSession();
    const path = request.nextUrl.pathname;
    const isOnProtectedRoute = protectedRoutes.some((route) =>
        path.startsWith(route),
    );
    const isOnPublicRoute = publicRoutes.includes(path);
    const isOnShareRoute = shareRoutes.some((route) => path.startsWith(route));
    if (
        path === "/reset-password" &&
        request.nextUrl.searchParams.has("code")
    ) {
        return response;
    }

    // Allow shared routes without authentication
    if (isOnShareRoute) {
        return response;
    }

    if (isOnProtectedRoute && !session) {
        return NextResponse.redirect(new URL("/log-in", request.url));
    }

    if (isOnPublicRoute && session) {
        return NextResponse.redirect(new URL("/projects", request.url));
    }

    return response;
}

// Routes middleware should not run on
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
