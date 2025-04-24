import {type ReactNode} from "react";
import {Heading as HeadingBase} from "@chakra-ui/react";

export const Heading = ({children}: {children: ReactNode}) => {
  return <HeadingBase size="md">{children}</HeadingBase>;
};
