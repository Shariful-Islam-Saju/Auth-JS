import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Register" };

const page = () => {
  return <RegisterForm />;
};

export default page;
