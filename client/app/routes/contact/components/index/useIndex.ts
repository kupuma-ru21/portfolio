import { type FormEvent } from "react";
import { useNavigation } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useGTM } from "~/utils/gtm/hooks";

export const useIndex = () => {
  const { t } = useTranslation("contact");

  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" || navigation.state === "loading";

  const { sendToGTM } = useGTM();
  const sendDataToGTM = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendToGTM({ event: "contact", platform: "web" });
  };

  return { t, isSubmitting, sendDataToGTM };
};
