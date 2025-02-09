import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface backButtonProps {
  herf: string;
  label: string;
}

const BackButton = ({ herf, label }: backButtonProps) => {
  return (
    <Button variant={"link"} className="font-normal w-full" size={"sm"} asChild>
      <Link href={herf}>{label}</Link>
    </Button>
  );
};

export default BackButton;
