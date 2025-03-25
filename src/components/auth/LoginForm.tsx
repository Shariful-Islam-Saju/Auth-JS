"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import CardWrapper from "./CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { LoginSchemas } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { login } from "@/app/actions/login";
import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();
  if (searchParams.get("error") === "OAuthAccountNotLinked") {
    setError("Email already in use");
  }
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchemas>>({
    resolver: zodResolver(LoginSchemas),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchemas>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      const response = await login(values);
      if (response?.error) {
        setError(response.error);
      }
      if (response?.success) {
        setSuccess(response.success);
        router.push(response.redirectTo);
      }
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHerf="/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="example@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <Button
                    className="px-0 "
                    size={"sm"}
                    asChild
                    variant={"link"}
                  >
                    <Link href={"reset"}>Forget Password</Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>{" "}
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
