import {
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SwitchTheme } from "../../switch-theme";
import { Wrapper } from "../../wrapper";
import { ExternalIconLink } from "../external-icon-link";
import { useIndex } from "./useIndex";
import { useGetLinks } from "~/components/hooks/useGetLinks";
import { Link } from "~/components/link";
import { NavLink } from "~/components/nav-link";

export const Header = () => {
  const { t } = useIndex();
  const { links } = useGetLinks();

  return (
    <Wrapper>
      <Flex gap="8px">
        <SwitchTheme />
        <Menu>
          <MenuButton
            display={{ base: "block", md: "none" }}
            as={IconButton}
            icon={
              <Icon
                as={CiMenuBurger}
                aria-label={t("header.menu.aria-label")}
              />
            }
          />
          <MenuList display={{ base: "block", md: "none" }}>
            {links.map((link) => {
              return <MenuItem as={NavLink} {...link} key={link.to} />;
            })}
          </MenuList>
        </Menu>
      </Flex>
      <Flex gap="16px">
        <ExternalIconLink
          href="https://github.com/kupuma-ru21"
          aria-label="github"
          iconType={FaGithub}
        />
        <ExternalIconLink
          href="https://www.linkedin.com/in/koichi-kimura-06ba14259/"
          aria-label="linkedin"
          iconType={FaLinkedin}
        />
        <Tooltip label={t("header.resume.abbr")}>
          <div>
            <ExternalIconLink
              href="/resume.pdf"
              aria-label={t("header.resume.aria-label")}
              iconType={FaFilePdf}
            />
          </div>
        </Tooltip>
        <Tooltip label={t("header.contact.abbr")}>
          <div>
            <IconButton
              as={Link}
              to="/contact"
              aria-label={t("header.contact.aria-label")}
              icon={<Icon as={MdOutlineMailOutline} boxSize="24px" />}
              colorScheme="teal"
            />
          </div>
        </Tooltip>
      </Flex>
    </Wrapper>
  );
};
