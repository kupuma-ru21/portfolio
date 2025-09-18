import {type ReactNode} from "react";
import {Icon, IconButton as IconButtonBase} from "@chakra-ui/react";

export const ExternalIconLink = ({
  icon,
  ...rest
}: {
  icon: ReactNode;
  href: string;
  "aria-label": string;
}) => {
  return (
    <IconButtonBase {...rest} bgColor="#319795" asChild>
      <a target="_blank" rel="noreferrer">
        <Icon boxSize="24px">{icon}</Icon>
      </a>
    </IconButtonBase>
  );
};
