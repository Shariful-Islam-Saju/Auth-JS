"use client";
import React from "react";
import CardWrapper from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

const NewVerification = () => {
  const searchParam = useSearchParams();
  const token = searchParam.get("token");
  console.log(token)
  return (
    <CardWrapper
      headerLabel="Confirming your verification "
      backButtonHerf="/login"
      backButtonLabel="Back to Login"
    >
      <div className="flex items-center w-full justify-center">
        <BeatLoader />
      </div>
    </CardWrapper>
  );
};

export default NewVerification;
