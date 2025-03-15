// public route
export const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/error",
  "/new-verification",
];

//authenticaton route
export const authRoutes = ["/login", "/register", "/error"];

// The prefix for api authentication route
export const apiAuthPrefix = "/api/auth";

// The defalut redirect path after login
export const DEFAULT_LOGIN_REDIRECT = "/settings";
