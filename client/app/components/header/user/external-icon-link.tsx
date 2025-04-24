import {Icon, IconButton as IconButtonBase} from "@chakra-ui/react";
import {type IconType} from "react-icons/lib";

export const ExternalIconLink = ({
  iconType,
  ...rest
}: {
  iconType: IconType;
  href: string;
  "aria-label": string;
}) => {
  return (
    <IconButtonBase
      icon={<Icon as={iconType} boxSize="24px" />}
      {...rest}
      colorScheme="teal"
      as="a"
      target="_blank"
      rel="noreferrer"
    />
  );
};
