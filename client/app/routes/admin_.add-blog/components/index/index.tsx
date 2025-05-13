import {useRef} from "react";
import {
  chakra,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Button,
} from "@chakra-ui/react";
import {Form} from "@remix-run/react";
import {useIndex} from "./useIndex";
import {Input} from "~/components/input";
import {SubmitButton} from "~/components/submit-button";
import {Textarea} from "~/components/textarea";

export const AddBlog = () => {
  const {t, isSubmitting} = useIndex();
  const isDraftInputRef = useRef<HTMLInputElement>(null);

  const saveAsDraft = () => {
    if (!isDraftInputRef.current) return;
    isDraftInputRef.current.value = "true";
  };

  return (
    <Box py="20px">
      <Heading as="h1" textAlign="center" mb="32px">
        {t("add-blog-post")}
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
            <SubmitButton isLoading={isSubmitting}>{t("post")}</SubmitButton>
            <Button
              onClick={saveAsDraft}
              isLoading={isSubmitting}
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
