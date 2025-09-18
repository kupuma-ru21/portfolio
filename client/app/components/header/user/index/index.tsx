import {Flex, IconButton, Menu, Portal} from "@chakra-ui/react";
import {Tooltip} from "generated/chakra-ui/tooltip";
import {CiMenuBurger} from "react-icons/ci";
import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";
import {Wrapper} from "../../wrapper";
import {ExternalIconLink} from "../external-icon-link";
import {useIndex} from "./useIndex";
import {useGetLinks} from "~/components/hooks/useGetLinks";
import {Link} from "~/components/link";

export const Header = () => {
  const {t} = useIndex();
  const {links} = useGetLinks();

  return (
    <Wrapper>
      <Flex gap="16px">
        <ExternalIconLink
          href="https://github.com/kupuma-ru21"
          aria-label="github"
          icon={<FaGithub />}
        />
        <ExternalIconLink
          href="https://www.linkedin.com/in/koichi-kimura-06ba14259/"
          aria-label="linkedin"
          icon={<FaLinkedin />}
        />
        <Tooltip content={t("header.resume.Open Resume")}>
          <div>
            <ExternalIconLink
              href="/resume.pdf"
              aria-label={t("header.resume.Resume")}
              icon={<FaFilePdf />}
            />
          </div>
        </Tooltip>
        <Menu.Root>
          <Menu.Trigger asChild>
            <IconButton variant="outline" display={{md: "none"}}>
              <CiMenuBurger />
            </IconButton>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {links.map(({to, children}) => {
                  return (
                    <Menu.Item value={to} key={to}>
                      <Link to={to}>{children}</Link>
                    </Menu.Item>
                  );
                })}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Flex>
    </Wrapper>
  );
};
