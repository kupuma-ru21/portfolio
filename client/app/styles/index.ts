import {extendTheme} from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {overscrollBehavior: "none"},
    // NOTE UI changes if scroll bar is present so we force it to always be present
    html: {overflowY: "scroll"},
  },
};

const config = {initialColorMode: "light", useSystemColorMode: false};

export const theme = extendTheme({styles, config});
