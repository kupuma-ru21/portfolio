import {Box, Heading, List, Text} from "@chakra-ui/react";
import {useIndex} from "./useIndex";

export const About = () => {
  const {t, hobbies} = useIndex();

  return (
    <Box py="20px" px="24px">
      <Heading as="h1" mb="16px" textAlign="center" size="3xl" fontWeight={700}>
        {t("About")}
      </Heading>
      <Heading mb="56px" fontWeight={600} fontSize="3xl" textAlign="center">
        {t("Let me introduce myself!")}
      </Heading>
      <Heading as="h3" mb="16px">
        {t("I like to do...")}
      </Heading>
      <List.Root gap="24px">
        {hobbies.map(({icon, title, descriptions}) => {
          return (
            <List.Root gap="2" variant="plain" align="center" key={title}>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  {icon}
                </List.Indicator>
                <Heading size="xl">{title}</Heading>
              </List.Item>
              {descriptions.map((description) => {
                return <Text key={description}>{description}</Text>;
              })}
            </List.Root>
          );
        })}
      </List.Root>
    </Box>
  );
};
