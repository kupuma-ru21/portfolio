import { Flex, Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { IoMdHome } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { SwitchTheme } from "../switch-theme";
import { Wrapper } from "../wrapper";
import { useIndex } from "./useIndex";
import { Link } from "~/components/link";

export const AdminHeader = () => {
  const { t } = useIndex();

  return (
    <Wrapper>
      <SwitchTheme />
      <Flex gap="16px">
        <Tooltip label={t("admin-header.Logout")}>
          <Form action="/logout" method="POST">
            <IconButton
              type="submit"
              aria-label={t("admin-header.Logout")}
              icon={<Icon as={MdLogout} boxSize="24px" />}
              colorScheme="teal"
            />
          </Form>
        </Tooltip>
        <IconButton
          as={Link}
          to="/"
          aria-label={t("admin-header.Home")}
          icon={<Icon as={IoMdHome} boxSize="24px" />}
          colorScheme="teal"
        />
      </Flex>
    </Wrapper>
  );
};
