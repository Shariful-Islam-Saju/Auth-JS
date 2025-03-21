import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  function handleSignIn(provider: "google" | "github") {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  }
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        className="w-full"
        size={"lg"}
        variant="outline"
        onClick={() => {
          handleSignIn("google");
        }}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>{" "}
      <Button
        className="w-full"
        size={"lg"}
        variant="outline"
        onClick={() => {
          handleSignIn("github");
        }}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
