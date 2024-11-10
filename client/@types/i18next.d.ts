// Ref: https://www.i18next.com/overview/typescript

import type Resources from "./resources.d.ts";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: Resources;
  }
}
