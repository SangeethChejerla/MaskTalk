import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a matcher to specify which routes are protected
const isProtectedRoutes = createRouteMatcher(['/']);
export default clerkMiddleware((auth, req) => {
  // Check if the request matches the protected routes
  if (isProtectedRoutes(req))
    auth().protect()
  });
export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)','/(api|trpc)(.*)',],
};
