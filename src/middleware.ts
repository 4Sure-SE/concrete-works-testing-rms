import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // TO BE CHANGED
    const isAuthenticated = true;

    if (isAuthenticated)
        return NextResponse.redirect(new URL("/projects", request.url));
    else if (isAuthenticated == false)
        return NextResponse.redirect(new URL("/log-in", request.url));

    return NextResponse.next();
}

export const config = {
    matcher: ["/"],
};
