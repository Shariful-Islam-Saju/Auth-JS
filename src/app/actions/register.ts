"use server";
import { RegisterSchemas } from "@/schemas";
import * as z from "zod";
export const register = async (values: z.infer<typeof RegisterSchemas>) => {
  const validatedFields = RegisterSchemas.safeParse(values);


  console.log(validatedFields)
  if (validatedFields.error) {
    return { error: "There is problem in create your account." };
  }
  if (validatedFields.success) {
    return { success: "Account created successfully." };
  }
};
