import {chakra, Box, Flex, Heading, Stack} from "@chakra-ui/react";
import {Form} from "@remix-run/react";
import {Radio, RadioGroup} from "generated/chakra-ui/radio";
import {type AppQuery, type AppFragment, AppLinkType} from "gql/graphql";
import {useIndex} from "./useIndex";
import {FormControl} from "~/components/formControl";
import {FormLabel} from "~/components/formLabel";
import {Input} from "~/components/input";
import {SubmitButton} from "~/components/submit-button";
import {Textarea} from "~/components/textarea";

export const EditApp = ({app}: {app: AppQuery["app"] & AppFragment}) => {
  const {t, isSubmitting} = useIndex();

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
              <Input defaultValue={app.title} name="title" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("Detail")}</FormLabel>
              <Textarea defaultValue={app.detail} name="detail" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("imageUrl")}</FormLabel>
              <Input defaultValue={app.imageURL} name="imageUrl" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("link")}</FormLabel>
              <Input defaultValue={app.link} name="link" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("Type of the URL")}</FormLabel>
              <RadioGroup name="linkType" defaultValue={app.linkType}>
                <Stack direction="row" gap="16px">
                  <Radio value={AppLinkType.App}>{t("App")}</Radio>
                  <Radio value={AppLinkType.Company}>{t("Company")}</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Flex>
          <SubmitButton loading={isSubmitting}>{t("Submit")}</SubmitButton>
        </chakra.fieldset>
      </Form>
    </Box>
  );
};
