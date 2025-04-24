import {Button, type ButtonProps} from "@chakra-ui/react";

export const SubmitButton = (props: ButtonProps) => {
  return <Button {...props} type="submit" size="lg" colorScheme="teal" />;
};
