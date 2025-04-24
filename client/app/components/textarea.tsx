import {Textarea as TextareaBase, type TextareaProps} from "@chakra-ui/react";

export const Textarea = (props: TextareaProps) => {
  return <TextareaBase {...props} isRequired h="350px" />;
};
