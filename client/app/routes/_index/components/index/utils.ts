import {LOCALES} from "~/constants";

export const getPathByLocale = (locale: string) => {
  return locale === LOCALES.ja ? "" : `${LOCALES.en}/`;
};
