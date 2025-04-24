import {forwardRef} from "react";
import {NavLink as NavLinkBase, type NavLinkProps} from "@remix-run/react";

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    return (
      <NavLinkBase
        {...props}
        style={({isActive}) => {
          if (isActive) return {backgroundColor: "#319795", color: "#FFFFFF"};
          return undefined;
        }}
        ref={ref}
        prefetch="intent"
      />
    );
  },
);

NavLink.displayName = "NavLink";
