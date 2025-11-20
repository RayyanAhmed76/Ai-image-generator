// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // allow public paths
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/about")
  ) {
    return NextResponse.next();
  }

  // check auth cookie
  const cookie = req.cookies.get("flux_auth")?.value;

  if (!cookie) {
    // If accessing root path, redirect to about page
    if (pathname === "/") {
      const aboutUrl = req.nextUrl.clone();
      aboutUrl.pathname = "/about";
      return NextResponse.redirect(aboutUrl);
    }
    // For other protected paths, redirect to login
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";
    // optionally include returnTo param:
    loginUrl.searchParams.set("returnTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // authenticated
  return NextResponse.next();
}

// Apply middleware to all pages except assets/api/_next/login
export const config = {
  matcher: [
    /*
      Match all paths except:
      - /login
      - /api/*
      - /_next/*
      - /static/*
      - /favicon.ico
    */
    "/((?!api|_next|static|favicon.ico|login).*)",
    "/", // ensure root is matched
  ],
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const maintenanceEnabled = process.env.MAINTENANCE_MODE === "true";

//   // Allow direct access to the maintenance page
//   if (req.nextUrl.pathname.startsWith("/maintenance.html")) {
//     return NextResponse.next();
//   }

//   // Redirect everything to the maintenance page
//   if (maintenanceEnabled) {
//     return NextResponse.redirect(new URL("/maintenance.html", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next|api).*)"],
// };
