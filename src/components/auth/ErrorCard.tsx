import React from "react";
import CardWrapper from "./CardWrapper";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHerf="/login"
      backButtonLabel="Back to login"
      headerLabel="Oop! Something went wrong!"
      
    >
      <div className="w-full flex justify-center items-center">
        <FaExclamationTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
