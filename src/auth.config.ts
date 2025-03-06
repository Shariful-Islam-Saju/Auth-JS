import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchemas } from "./schemas";
import { getUserByEmail } from "./lib/user";

export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const validateFields = LoginSchemas.safeParse(credentials);
          if (!validateFields.success) {
            return null;
          }

          const { email, password } = validateFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const matchPassword = await bcrypt.compare(password, user.password);
          if (!matchPassword) {
            return null;
          }
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
