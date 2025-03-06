import { auth } from "@/auth";
import React from "react";

const Settings = async () => {
  const session = await auth();
  console.log(session);
  return <div>Settings</div>;
};

export default Settings;
