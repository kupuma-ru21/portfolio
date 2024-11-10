import { useTranslation } from "react-i18next";

export const useGetLinks = () => {
  const { t } = useTranslation("common");

  const links = [
    { to: "/", children: t("side-bar.home") },
    { to: "/contact", children: t("side-bar.contact") },
    { to: "/about", children: t("side-bar.about") },
  ];

  return { links };
};
