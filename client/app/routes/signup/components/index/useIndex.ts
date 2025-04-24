import {useNavigation} from "@remix-run/react";
import {useTranslation} from "react-i18next";

export const useIndex = () => {
  const {t} = useTranslation("signup");

  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" || navigation.state === "loading";

  return {t, isSubmitting};
};
