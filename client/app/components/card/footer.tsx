import { type ReactNode } from "react";
import { CardFooter } from "@chakra-ui/react";

export const Footer = ({ children }: { children: ReactNode }) => {
  return <CardFooter gap="8px">{children}</CardFooter>;
};
