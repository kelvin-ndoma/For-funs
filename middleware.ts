import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Since none of your protected routes are intended for public access, 
  // we can leave this commented out.
  // publicRoutes: [],
});

export const config = {
  matcher: [
    // Exclude static files and Next.js internals
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include API and TRPC folders
    "/(api|trpc)(.*)",
    // **New:** Include all your protected routes with exact matching
    // You can adjust the patterns for more flexibility
    "/",
    "/upcoming",
    "/previous",
     "/recordings",
     "/personal-room",
     "/meeting(.*)"
  ]
};
