"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface loginButtonProps {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: loginButtonProps) => {
  const router = useRouter();
  function handleClick() {
    router.push("/login");
  }

  if (mode === "modal") {
    return <span onClick={handleClick}>TODO: Implement modal</span>;
  }
  return <span onClick={handleClick}>{children}</span>;
};

export default LoginButton;
