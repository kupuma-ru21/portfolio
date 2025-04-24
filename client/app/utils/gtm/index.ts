import type {GTMPayload} from "./types";

export function sendToGTM(payload: GTMPayload) {
  // ref: https://remix.run/docs/en/main/guides/gotchas#typeof-window-checks
  if (typeof document === "undefined") return;

  if (window.dataLayer == null) {
    window.dataLayer = [];
  }

  (window.dataLayer as GTMPayload[]).push(payload);
}
