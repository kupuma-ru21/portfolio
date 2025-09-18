import {Button, Flex} from "@chakra-ui/react";
import {useGetLinks} from "../hooks/useGetLinks";
import {NavLink} from "../nav-link";
import {SIDE_BAR_WIDTH} from "./constants";

export const SideBar = () => {
  const {links} = useGetLinks();

  return (
    <Flex
      display={{base: "none", md: "flex"}}
      w={`${SIDE_BAR_WIDTH}px`}
      direction="column"
      gap="8px"
      bgColor="initial"
      position="fixed"
      h="100%"
      boxShadow="0px 1px 5px 0px rgba(88, 102, 126, 0.13)"
      py="20px"
      left={0}
      zIndex={1}
    >
      {links.map((link) => {
        return <Button as={NavLink} {...link} w="100%" key={link.to} />;
      })}
    </Flex>
  );
};
