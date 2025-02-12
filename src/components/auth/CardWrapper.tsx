"use client";
import { ReactNode } from "react";
import { Card, CardHeader, CardFooter, CardContent } from "../ui/card";
import Header from "./Header";
import Social from "./Social";
import BackButton from "./BackButton";

interface cardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHerf: string;
  showSocial?: boolean;
}
const CardWrapper = ({
  children,
  headerLabel,
  backButtonHerf,
  backButtonLabel,
  showSocial,
}: cardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-xl mx-3 md:mx-0">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton herf={backButtonHerf} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
