import {useRef} from "react";
import {useNavigation} from "@remix-run/react";

export const useModifyBlog = () => {
  const {state} = useNavigation();
  const isSubmitting = state === "submitting" || state === "loading";

  const isDraftInputRef = useRef<HTMLInputElement>(null);

  const saveAsDraft = () => {
    if (!isDraftInputRef.current) return;
    isDraftInputRef.current.value = "true";
  };

  return {isSubmitting, isDraftInputRef, saveAsDraft};
};
