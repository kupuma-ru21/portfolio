import {Input as InputBase, type InputProps} from "@chakra-ui/react";

export const Input = (props: InputProps) => {
  return <InputBase {...props} isRequired w="100%" />;
};
