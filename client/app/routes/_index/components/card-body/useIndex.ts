import {useState} from "react";
import {useTranslation} from "react-i18next";
import {NO_OF_LINES} from "~/constants";

export const useIndex = () => {
  const {t} = useTranslation("index");

  const [noOfLines, setOoOfLines] = useState<number | undefined>(NO_OF_LINES);
  const showFullDetail = () => {
    setOoOfLines((prev) => (prev === undefined ? NO_OF_LINES : undefined));
  };

  return {t, noOfLines, showFullDetail};
};
