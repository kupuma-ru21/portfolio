import {Input as InputBase, type InputProps} from "@chakra-ui/react";

export const Input = (props: InputProps) => {
  return <InputBase {...props} isRequired w={{base: "300px", md: "400px"}} />;
};
