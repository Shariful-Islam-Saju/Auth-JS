"use client";
import React, { useEffect } from "react";
import CardWrapper from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { verifyToken } from "@/app/actions/newVerification";

const NewVerification = () => {
  const searchParam = useSearchParams();
  const token = searchParam.get("token");

  useEffect(() => {
    async function handleToken() {
      if (token) {
        const isValidToken = await verifyToken(token);
      }
    }
    handleToken()
  }, [token]);

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
