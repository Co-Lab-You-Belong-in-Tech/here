import React from "react";
import {
  StyleProp,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";

import { Box } from "../shared-components";

interface TextInputProps extends RNTextInputProps {
  placeholder?: string;
  borderBottomWidth?: StyleProp<number>;
  placeHolderStyle?: StyleProp<string>;
  secureTextInput?: StyleProp<boolean>;
}

const TextInput = React.forwardRef(
  (
    {
      placeholder,
      borderBottomWidth,
      secureTextEntry,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        backgroundColor="offgrey"
        padding="m"
        // borderWidth={1}
      >
        <Box flex={1}>
          {/* @ts-ignore */}
          <RNTextInput
            underlineColorAndroid="transparent"
            onBlur={props.onBlur}
            {...{ placeholder, borderBottomWidth, secureTextEntry }}
            {...{ ref }}
            {...props}
          />
        </Box>
      </Box>
    );
  },
);

export default TextInput;
