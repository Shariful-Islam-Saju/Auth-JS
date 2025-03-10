"use server";
import { db } from "@/lib/db";
import { generateVerificationToken } from "@/lib/token";
import { getUserByEmail } from "@/lib/user";
import { RegisterSchemas } from "@/schemas";
import { hash } from "bcryptjs";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchemas>) => {
  try {
    const validatedFields = RegisterSchemas.safeParse(values);
    if (validatedFields.error) {
      throw new Error("Invalid fields");
    }
    const { name, email, password } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if (existingUser && existingUser.email) {
      throw new Error("Email already exit");
    }

    const hashedPassword = await hash(password, 10);

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken(email);
    return { success: "Verification code sent" };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
};
