import {useTranslation} from "react-i18next";

export const useIndex = () => {
  const {t} = useTranslation("not-found");

  return {t};
};
