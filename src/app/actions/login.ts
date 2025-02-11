"use server";
import { LoginSchemas } from "@/schemas";
import * as z from "zod";
export const login = async (values: z.infer<typeof LoginSchemas>) => {
  console.log("This is values from server", values);
};
