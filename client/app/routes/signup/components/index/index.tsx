import {Box, Input, VStack} from "@chakra-ui/react";
import {Form} from "@remix-run/react";
import {useIndex} from "./useIndex";
import {SubmitButton} from "~/components/submit-button";

export const Signup = () => {
  const {t, isSubmitting} = useIndex();
  return (
    <Box textAlign="center" h="100dvh" alignContent="center">
      <Form method="POST">
        <fieldset disabled={isSubmitting}>
          <VStack>
            <Input
              type="email"
              name="email"
              placeholder={t("example@email.com")}
              w={{base: "300px", md: "600px"}}
              isRequired
              autoComplete="true"
            />
            <Input
              type="password"
              name="password"
              w={{base: "300px", md: "600px"}}
              isRequired
              min={8}
            />
            <SubmitButton isLoading={isSubmitting}>{t("Signup")}</SubmitButton>
          </VStack>
        </fieldset>
      </Form>
    </Box>
  );
};
