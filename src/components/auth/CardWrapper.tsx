import { ReactNode } from "react";
import { Card, CardHeader, CardFooter, CardContent } from "../ui/card";
import Header from "./Header";

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
    <Card>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>
        {children }
      </CardContent>
    </Card>
  );
};

export default CardWrapper;
