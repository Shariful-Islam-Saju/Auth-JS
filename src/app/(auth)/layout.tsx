import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full  items-center justify-center ">
      {children}
    </div>
  );
};

export default layout;
