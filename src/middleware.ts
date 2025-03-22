import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/projects"];
const publicRoutes = ["/log-in", "/sign-up"];

export function middleware(request: NextRequest) {
    // check if the current route is protected or public
    const path = request.nextUrl.pathname;
    const isOnProtectedRoute = protectedRoutes.includes(path);
    const isOnPublicRoute = publicRoutes.includes(path);

    // TO BE CHANGED
    const isAuthenticated = false;

    //  if user is on a protected route (e.g. /projects) and
    //  is not authenticated, redirect them to the login page
    if (isOnProtectedRoute && !isAuthenticated)
        return NextResponse.redirect(new URL("/log-in", request.url));

    //  if user is on a public route (e.g. /login, /signup) and
    //  is already authenticated, redirect them to the projects page
    if (isOnPublicRoute && isAuthenticated && !path.startsWith("/projects"))
        return NextResponse.redirect(new URL("/projects", request.url));

    return NextResponse.next();
}

// routes middleware should not run on
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
