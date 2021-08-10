import React from "react";
import { LoadAssets, theme } from "./shared-components";
import { ThemeProvider } from "@shopify/restyle";
import { AuthenticationNavigator } from "./components/authentication";

const fonts = {
  "Iter-Light-300": require("../assets/fonts/Inter-Light.ttf"),
  "Iter-Regular-400": require("../assets/fonts/Inter-Regular.ttf"),
  "Iter-Medium-500": require("../assets/fonts/Inter-Medium.ttf"),
  "Iter-SemiBold-600": require("../assets/fonts/Inter-SemiBold.ttf"),
  "Iter-Bold-700": require("../assets/fonts/Inter-Bold.ttf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
