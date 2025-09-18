import {Textarea as TextareaBase, type TextareaProps} from "@chakra-ui/react";

export const Textarea = (props: TextareaProps) => {
  return <TextareaBase {...props} required h="350px" />;
};
