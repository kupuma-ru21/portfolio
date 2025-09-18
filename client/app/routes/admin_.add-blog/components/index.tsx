import {
  chakra,
  Box,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import {Form} from "@remix-run/react";
import {useTranslation} from "react-i18next";
import { FormControl } from "~/components/formControl";
import { FormLabel } from "~/components/formLabel";
import {Input} from "~/components/input";
import {SubmitButton} from "~/components/submit-button";
import {Textarea} from "~/components/textarea";
import {useModifyBlog} from "~/hooks/useModifyBlog";

export const AddBlog = () => {
  const {t} = useTranslation("admin_add_blog");
  const {isSubmitting, isDraftInputRef, saveAsDraft} = useModifyBlog();

  return (
    <Box py="20px">
      <Heading as="h1" textAlign="center" mb="32px">
        {t("Add Blog")}
      </Heading>
      <Form method="POST" style={{textAlign: "center"}}>
        <chakra.fieldset disabled={isSubmitting}>
          <Flex
            direction="column"
            justifyContent="center"
            w={{base: "300px", md: "700px"}}
            m="auto"
            gap="24px"
            mb="54px"
          >
            <FormControl>
              <FormLabel>{t("title")}</FormLabel>
              <Input name="title" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("detail")}</FormLabel>
              <Textarea name="detail" />
            </FormControl>
            <input
              ref={isDraftInputRef}
              type="hidden"
              name="isDraft"
              defaultValue="false"
            />
          </Flex>
          <Flex gap="24px" justifyContent="center">
            <SubmitButton loading={isSubmitting}>{t("post")}</SubmitButton>
            <Button
              onClick={saveAsDraft}
              loading={isSubmitting}
              type="submit"
              size="lg"
            >
              {t("save-as-draft")}
            </Button>
          </Flex>
        </chakra.fieldset>
      </Form>
    </Box>
  );
};
