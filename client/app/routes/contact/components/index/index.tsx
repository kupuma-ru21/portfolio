import {
  chakra,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import {Form} from "@remix-run/react";
import {useIndex} from "./useIndex";
import {Input} from "~/components/input";
import {SubmitButton} from "~/components/submit-button";
import {Textarea} from "~/components/textarea";

export const Contact = () => {
  const {t, isSubmitting, sendDataToGTM} = useIndex();

  return (
    <Box py="20px">
      <Heading as="h1" textAlign="center" mb="32px">
        {t("Contact")}
      </Heading>
      <Form
        method="POST"
        onSubmit={sendDataToGTM}
        style={{textAlign: "center"}}
      >
        <chakra.fieldset disabled={isSubmitting}>
          <Flex
            direction="column"
            justifyContent="center"
            w="fit-content"
            m="auto"
            gap="24px"
            mb="54px"
          >
            <FormControl>
              <FormLabel>{t("Your email address")}</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("Subject")}</FormLabel>
              <Input name="subject" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("Content")}</FormLabel>
              <Textarea name="content" />
            </FormControl>
          </Flex>
          <SubmitButton>{t("Submit")}</SubmitButton>
        </chakra.fieldset>
      </Form>
    </Box>
  );
};
