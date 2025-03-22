"use server";
import { signIn } from "@/auth";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/token";
import { getUserByEmail } from "@/lib/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchemas } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchemas>) => {
  const validatedFields = LoginSchemas.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid input fields" };
  }

  const { email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email not Exits" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);

    // TODO: This will be added later 
    // await sendVerificationEmail(
    //   verificationToken.email,
    //   verificationToken.token
    // );
    return {
      success: "Verification email sent",
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    };
  }

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevents automatic redirection
    });

    if (result?.error) {
      return { error: "Invalid Credentials" };
    }

    return {
      success: "Welcome back! You are now logged in.",
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong!!!" };
      }
    }

    return { error: "Unexpected error occurred" };
  }
};
