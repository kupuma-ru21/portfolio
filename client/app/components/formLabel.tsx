import {type PropsWithChildren} from "react";
import {Field} from "@chakra-ui/react";

export const FormLabel = ({children}: PropsWithChildren) => {
  return (
    <Field.Label m={0} alignItems="initial">
      {children}
    </Field.Label>
  );
};
