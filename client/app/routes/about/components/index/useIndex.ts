import {useTranslation} from "react-i18next";
import {FaBook, FaLaptop} from "react-icons/fa";
import {IoFastFoodOutline} from "react-icons/io5";

export const useIndex = () => {
  const {t} = useTranslation("about");

  const hobbies = [
    {
      icon: FaLaptop,
      title: t("software development.title"),
      descriptions: [t("software development.description")],
    },
    {
      icon: FaBook,
      title: t("reading comics and watching anime.title"),
      descriptions: [
        t("reading comics and watching anime.description1"),
        t("reading comics and watching anime.description2"),
        t("reading comics and watching anime.description3"),
      ],
    },
    {
      icon: IoFastFoodOutline,
      title: t("going to a restaurant.title"),
      descriptions: [t("going to a restaurant.description")],
    },
  ];

  return {t, hobbies};
};
