"use client";
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
  function handleClick() {
    console.log("button click");
  }

  if (mode === "modal") {
    return <span onClick={handleClick}>TODO: Implement modal</span>;
  }
  return <span onClick={handleClick}>{children}</span>;
};

export default LoginButton;
