import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log(isLoggedIn);
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};
