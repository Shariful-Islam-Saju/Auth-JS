import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = { title: "Login" };

const page = () => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default page;
