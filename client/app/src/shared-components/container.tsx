import React, { ReactNode } from "react";
import { Box } from "./theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <Box flex={1} backgroundColor="white" padding="xl">
      <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
    </Box>
  );
}

export default Container;
