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
import {CiMenuBurger} from "react-icons/ci";
import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";
import {SwitchTheme} from "../../switch-theme";
import {Wrapper} from "../../wrapper";
import {ExternalIconLink} from "../external-icon-link";
import {useIndex} from "./useIndex";
import {useGetLinks} from "~/components/hooks/useGetLinks";
import {NavLink} from "~/components/nav-link";

export const Header = () => {
  const {t} = useIndex();
  const {links} = useGetLinks();

  return (
    <Wrapper>
      <Flex gap="8px">
        <SwitchTheme />
        <Menu>
          <MenuButton
            display={{base: "block", md: "none"}}
            as={IconButton}
            icon={<Icon as={CiMenuBurger} aria-label={t("header.menu.Menu")} />}
          />
          <MenuList display={{base: "block", md: "none"}}>
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
        <Tooltip label={t("header.resume.Open Resume")}>
          <div>
            <ExternalIconLink
              href="/resume.pdf"
              aria-label={t("header.resume.Resume")}
              iconType={FaFilePdf}
            />
          </div>
        </Tooltip>
      </Flex>
    </Wrapper>
  );
};
