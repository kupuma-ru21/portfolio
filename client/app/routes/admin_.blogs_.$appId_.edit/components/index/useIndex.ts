import {useNavigation} from "@remix-run/react";
import {useTranslation} from "react-i18next";

export const useIndex = () => {
  const {t} = useTranslation("admin_apps_blog_id_edit");

  const {state} = useNavigation();
  const isSubmitting = state === "submitting" || state === "loading";

  return {t, isSubmitting};
};
