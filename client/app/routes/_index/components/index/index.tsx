import {useEffect} from "react";
import {Box, Divider, Flex, Heading, Image, Text} from "@chakra-ui/react";
import {AppLinkType, type AppFragment} from "gql/graphql";
import {CardContent} from "../card-body";
import {useIndex} from "./useIndex";
import {Card} from "~/components/card";
import {useGTM} from "~/utils/gtm/hooks";

export const Index = ({
  apps,
}: {
  apps: (AppFragment & {link: string; linkType: AppLinkType})[];
}) => {
  const {t} = useIndex();
  const {sendToGTM, eventFiredRef} = useGTM();
  useEffect(() => {
    if (eventFiredRef.current) return;
    sendToGTM({event: "page_view", user_id: "user_id"});
    eventFiredRef.current = true;
  }, [eventFiredRef, sendToGTM]);

  return (
    <Box py="20px">
      <Flex
        w="fit-content"
        m="auto"
        gap="16px"
        mb="48px"
        direction={{base: "column", md: "initial"}}
        alignItems={{base: "center", md: "initial"}}
      >
        <Heading as="h1" alignContent="center">
          <Text as="span" fontWeight={400}>
            {t("Hi! I'm")}{" "}
          </Text>
          <Text as="strong">{t("Koichi Kimura,")}</Text>
          <Text as="span" fontWeight={400} display="block">
            {t("a Full-Stack Developer")} 👋
          </Text>
        </Heading>
        <Image
          src="/images/index/profile.avif"
          alt="Koichi Kimura"
          w="247px"
          h="283px"
          borderRadius="8px"
          pointerEvents="none"
        />
      </Flex>
      <Divider />
      <Box p="16px">
        <Heading mb="16px" textAlign="center" fontWeight={600}>
          {t("Applications I developed at work")}
        </Heading>
        <Flex direction="column" gap="16px">
          {apps.map(({id, imageURL, title, detail, link, linkType}) => {
            return (
              <Card.Root key={id}>
                <Card.Image src={imageURL} alt={title} />
                <CardContent
                  title={title}
                  detail={detail}
                  href={link}
                  linkText={
                    linkType === AppLinkType.App
                      ? t("Move to the site")
                      : t("Move to company site")
                  }
                />
              </Card.Root>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
