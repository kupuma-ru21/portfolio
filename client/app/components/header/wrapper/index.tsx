import {type ReactNode} from "react";
import {chakra} from "@chakra-ui/react";

export const Wrapper = ({children}: {children: ReactNode}) => {
  return (
    <chakra.header
      boxShadow="0px 1px 5px 0px rgba(88, 102, 126, 0.13)"
      p="8px 16px"
      display="flex"
      justifyContent="space-between"
      position="sticky"
      top={0}
      bgColor="initial"
      zIndex={2}
    >
      {children}
    </chakra.header>
  );
};
