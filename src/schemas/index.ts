import * as z from "zod";

export const LoginSchemas = z.object({
  email: z.string().email("Type vaild email"),
  password: z.string().min(6, "Minimum 6 charecters need"),
});
