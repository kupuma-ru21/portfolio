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
import {type BlogQuery} from "gql/graphql";
import {useTranslation} from "react-i18next";
import {Input} from "~/components/input";
import {SubmitButton} from "~/components/submit-button";
import {Textarea} from "~/components/textarea";
import {useModifyBlog} from "~/hooks/useModifyBlog";

export const EditBlog = ({blog}: {blog: BlogQuery["blog"]}) => {
  const {t} = useTranslation("admin_apps_blog_id_edit");
  const {isSubmitting, isDraftInputRef, saveAsDraft} = useModifyBlog();

  return (
    <Box py="20px">
      <Heading as="h1" textAlign="center" mb="32px">
        {t("Edit Application")}
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
              <FormLabel>{t("Title")}</FormLabel>
              <Input defaultValue={blog.title} name="title" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("Detail")}</FormLabel>
              <Textarea defaultValue={blog.detail} name="detail" />
            </FormControl>
            <input
              ref={isDraftInputRef}
              type="hidden"
              name="isDraft"
              defaultValue="false"
            />
          </Flex>
          <Flex gap="24px" justifyContent="center">
            <SubmitButton isLoading={isSubmitting}>{t("Post")}</SubmitButton>
            <Button
              onClick={saveAsDraft}
              isLoading={isSubmitting}
              type="submit"
              size="lg"
            >
              {t("Save as Draft")}
            </Button>
          </Flex>
        </chakra.fieldset>
      </Form>
    </Box>
  );
};
