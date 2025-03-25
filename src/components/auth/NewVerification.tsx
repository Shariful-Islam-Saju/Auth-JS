"use client";
import React, { useEffect, useState } from "react";
import CardWrapper from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { verifyToken } from "@/app/actions/newVerification";
import FormSuccess from "../FormSuccess";
import FormError from "../FormError";

const NewVerification = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParam = useSearchParams();
  const token = searchParam.get("token");

  useEffect(() => {
    async function handleToken() {
      try {
        if (token) {
          const isValidToken = await verifyToken(token);
          setSuccess(isValidToken.seccess);
          setError(isValidToken.error);
        }
      } catch (error) {
        setError("Don't know what happend ");
      }
    }
    handleToken();
  }, [token]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification "
      backButtonHerf="/login"
      backButtonLabel="Back to Login"
    >
      <div className="flex items-center w-full justify-center">
        {!error && !success && <BeatLoader />}
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  );
};

export default NewVerification;
