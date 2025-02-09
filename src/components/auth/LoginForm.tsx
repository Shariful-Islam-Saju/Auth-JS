import React from "react";
import CardWrapper from "./CardWrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHerf="/register"
      backButtonLabel="Don't have a account?"
      showSocial
    >
      login
    </CardWrapper>
  );
};
