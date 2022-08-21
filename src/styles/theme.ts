import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    grey: {
      50: "#f5f5f5",
      100: "#e0e0e0",
      300: "#999999",
      400: "#828282",
      600: "#333333",
    },
    primary: {
      600: "#27a760",
    },
    secondary: {
      600: "#EB5757",
    },
    negative: {
      600: "#e60000",
    },
    success: {
      600: "#168821",
    },
    warning: {
      600: "#ffcd07",
    },
    information: {
      600: "#155BCB",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    styles: {
      global: {
        body: {
          bg: "white",
          color: "grey.600",
        },
      },
    },
  },
});
