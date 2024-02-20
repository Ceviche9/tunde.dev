import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#15151c",
      "800": "#1a1a22",
      "700": "#1e1e26",
      "600": "#23232b",
      "500": "#27272f",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "#15151c",
        color: "gray.50",
      },
    },
  },
});
