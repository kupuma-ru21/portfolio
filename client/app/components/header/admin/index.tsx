import {Button, Flex, Icon, IconButton} from "@chakra-ui/react";
import {Form} from "@remix-run/react";
import {Tooltip} from "generated/chakra-ui/tooltip";
import {IoMdHome} from "react-icons/io";
import {MdLogout} from "react-icons/md";
import {Wrapper} from "../wrapper";
import {useIndex} from "./useIndex";
import {Link} from "~/components/link";

export const AdminHeader = () => {
  const {t} = useIndex();

  return (
    <Wrapper>
      <Flex gap="16px">
        <Button asChild>
          <Link to="/admin">{t("admin-header.Applications")}</Link>
        </Button>
        <Button asChild>
          <Link to="/admin/blogs">{t("admin-header.Blog Posts")}</Link>
        </Button>
        <Tooltip content={t("admin-header.Logout")}>
          <Form action="/logout" method="POST">
            <IconButton
              type="submit"
              aria-label={t("admin-header.Logout")}
              colorScheme="teal"
            >
              <Icon boxSize="24px">
                <MdLogout />
              </Icon>
            </IconButton>
          </Form>
        </Tooltip>
        <IconButton
          asChild
          aria-label={t("admin-header.Home")}
          colorScheme="teal"
        >
          <Link to="/">
            <Icon boxSize="24px">
              <IoMdHome />
            </Icon>
          </Link>
        </IconButton>
      </Flex>
    </Wrapper>
  );
};
