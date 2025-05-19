import {useTranslation} from "react-i18next";

export const useGetLinks = () => {
  const {t} = useTranslation("common");

  const links = [
    {to: "/", children: t("side-bar.Home")},
    {to: "/contact", children: t("side-bar.Contact")},
    {to: "/about", children: t("side-bar.About")},
  ];

  return {links};
};
