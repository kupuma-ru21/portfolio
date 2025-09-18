import {Flex} from "@chakra-ui/react";
import {Tooltip} from "generated/chakra-ui/tooltip";
import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";
import {Wrapper} from "../../wrapper";
import {ExternalIconLink} from "../external-icon-link";
import {useIndex} from "./useIndex";
// import {useGetLinks} from "~/components/hooks/useGetLinks";

export const Header = () => {
  const {t} = useIndex();
  // const {links} = useGetLinks();

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
      </Flex>
    </Wrapper>
  );
};
