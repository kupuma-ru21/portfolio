import { forwardRef } from "react";
// eslint-disable-next-line no-restricted-imports
import { Link as LinkBase, type LinkProps } from "@remix-run/react";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return <LinkBase {...props} ref={ref} prefetch="intent" />;
});

Link.displayName = "Link";
