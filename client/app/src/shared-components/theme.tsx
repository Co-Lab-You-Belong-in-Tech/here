import { createBox, createText, createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#6156B0",
    title: "#FFF",

    white: "white",

    button: "#DF3935",
    transparent: "rgba(255, 255, 255, 0.15)",
    grey: "#0C0D34",
    shade: "#BDC4BC",
    offgrey: "#FAFAFB",
    primaryGreen: "#075A51",
  },
  spacing: {
    xxs: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 65,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 65,
  },
  textVariants: {
    hero: {
      fontSize: 55,
      lineHeight: 90,
      fontFamily: "Iter-Bold-700",
      color: "white",
      textAlign: "center",
      fontWeight: "500",
    },
    title: {
      fontSize: 64,
      fontFamily: "Iter-SemiBold-600",
      color: "white",
    },
    loginSubheader: {
      fontSize: 16,
      fontFamily: "Iter-Medium-500",
      color: "white",
    },
    body: {
      fontFamily: "Iter-Medium-500",
      fontSize: 16,
      lineHeight: 20,
    },
    button: {
      fontFamily: "Iter-Medium-500",
      fontSize: 24,
      textAlign: "center",
      color: "white",
    },
    forgetPassword: {
      fontFamily: "Iter-Medium-500",
      fontSize: 14,
      // color: "primaryGreen",
    },
    outlineButton: {
      border: "2px solid #6156B0",
      backgroundColor: "white",
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
