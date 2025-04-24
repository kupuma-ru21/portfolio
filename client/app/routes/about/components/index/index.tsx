import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import {useIndex} from "./useIndex";

export const About = () => {
  const {t, hobbies} = useIndex();

  return (
    <Box py="20px" px="24px">
      <Heading as="h1" mb="16px" textAlign="center">
        {t("About")}
      </Heading>
      <Heading mb="56px" fontWeight={600} fontSize="3xl" textAlign="center">
        {t("description")}
      </Heading>
      <Heading as="h3" mb="16px">
        {t("I like to do")}
      </Heading>
      <List spacing="24px">
        {hobbies.map(({icon, title, descriptions}) => {
          return (
            <ListItem key={title}>
              <Flex alignItems="center" gap="16px" mb="8px">
                <ListIcon boxSize="32px" as={icon} color="green.500" m={0} />
                <Heading as="h4" mb="16px" m={0} fontWeight={500}>
                  {title}
                </Heading>
              </Flex>
              {descriptions.map((description) => {
                return <Text key={description}>{description}</Text>;
              })}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
