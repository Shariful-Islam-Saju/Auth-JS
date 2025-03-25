import NewVerification from "@/components/auth/NewVerification";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <NewVerification />
    </Suspense>
  );
};

export default page;
