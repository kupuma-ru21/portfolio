import {useTranslation} from "react-i18next";
import {FaBook, FaLaptop} from "react-icons/fa";
import {IoFastFoodOutline} from "react-icons/io5";

export const useIndex = () => {
  const {t} = useTranslation("about");

  const hobbies = [
    {
      icon: FaLaptop,
      title: t("software-development.Software Development"),
      descriptions: [
        t(
          "software-development.I'm especially interested in how to improve maintainability and performance. For example, I've used just avif images in this project cuz it's better in performance than jpg, png and things like that.",
        ),
      ],
    },
    {
      icon: FaBook,
      title: t(
        "reading-comics-and-watching-anime.Reading comics and watching anime",
      ),
      descriptions: [
        t(
          "reading-comics-and-watching-anime.I'm a big fan of anime and comics. I've read countless comics and anime.",
        ),
        t(
          "reading-comics-and-watching-anime.Anime like below are my favorite:",
        ),
        t(
          "reading-comics-and-watching-anime.PSYCHO-PASS, Haikyu, JujutsuKaisen, Naruto, One Piece, Attack on Titan and so on.",
        ),
      ],
    },
    {
      icon: IoFastFoodOutline,
      title: t("going-to-restaurants.Going to restaurants"),
      descriptions: [
        t(
          "going-to-restaurants.I love to eat a food from other countries cuz through the food, I can learn about the culture of the country. It really broadens my horizons.",
        ),
      ],
    },
  ];

  return {t, hobbies};
};
