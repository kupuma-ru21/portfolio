import {type PropsWithChildren} from "react";
import {Button} from "@chakra-ui/react";
import {Link} from "./link";

export const MoveToHomeButton = ({children}: PropsWithChildren) => {
  return (
    <Button asChild colorScheme="teal" size="lg">
      <Link to="/">{children}</Link>
    </Button>
  );
};
