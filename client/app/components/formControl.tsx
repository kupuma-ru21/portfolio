import {type ComponentProps} from "react";
import {Field} from "@chakra-ui/react";

export const FormControl = (props: ComponentProps<typeof Field.Root>) => {
  return (
    <Field.Root
      {...props}
      orientation="horizontal"
      gap="48px"
      alignItems="initial"
      justifyContent="initial"
    />
  );
};
