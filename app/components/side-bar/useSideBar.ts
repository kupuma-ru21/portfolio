import { useTranslation } from "react-i18next";

export const useSideBar = () => {
  const { t } = useTranslation("common");

  const links = [
    { to: "/", children: t("side-bar.home") },
    { to: "/contact", children: t("side-bar.contact") },
  ];

  return { links };
};
