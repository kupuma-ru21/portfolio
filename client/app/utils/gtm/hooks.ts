import {useRef} from "react";
import {sendToGTM} from ".";

export function useGTM() {
  const eventFiredRef = useRef(false);

  return {sendToGTM, eventFiredRef};
}
