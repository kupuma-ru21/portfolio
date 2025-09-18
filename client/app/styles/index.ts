import {createSystem, defaultConfig} from "@chakra-ui/react";

const breakpoints = {lg: "1024px"};

export const system = createSystem(defaultConfig, {
  globalCss: {"html, body": {overscrollBehaviorY: "none"}},
  theme: {breakpoints},
});
