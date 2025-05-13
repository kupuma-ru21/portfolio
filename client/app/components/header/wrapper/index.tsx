import {type ReactNode} from "react";
import {chakra, useColorModeValue} from "@chakra-ui/react";

export const Wrapper = ({children}: {children: ReactNode}) => {
  return (
    <chakra.header
      boxShadow="0px 1px 5px 0px rgba(88, 102, 126, 0.13)"
      p="8px 16px"
      display="flex"
      justifyContent="space-between"
      position="sticky"
      top={0}
      bgColor={useColorModeValue("white", "black")}
      zIndex={2}
    >
      {children}
    </chakra.header>
  );
};
