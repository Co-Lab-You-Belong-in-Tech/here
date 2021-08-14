import { useTheme } from "@shopify/restyle";
import React, { CSSProperties, ReactNode } from "react";
import { StyleProp, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Theme, Text } from "./theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    width: 295,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: "#6156B0",
    borderStyle: "solid",
    backgroundColor: "white",
  },
});

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress?: () => void;
  children?: ReactNode;
  style?: StyleProp<CSSProperties>;
}

function Button({ variant, label, onPress, children, style }: ButtonProps) {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.transparent;

  const color =
    variant === "primary" ? theme.colors.white : theme.colors.primary;
  return (
    <RectButton
      style={[styles.container, styles.outlineButton, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
}

Button.defaultProps = { variant: "default" };

export default Button;
