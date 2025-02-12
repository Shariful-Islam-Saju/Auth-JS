"use server";
import { LoginSchemas } from "@/schemas";
import * as z from "zod";
export const login = async (values: z.infer<typeof LoginSchemas>) => {
  const validatedFields = LoginSchemas.safeParse(values);
  console.log(validatedFields);
  if (validatedFields.error) {
    return { error: "There is mistake in our server" };
  }
  if (validatedFields.success) {
    return { success: "Welcome back! You are now logged in." };
  }
};
