import React, { SyntheticEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, StyleSheet } from "react-native";
import { Animated, Image, SafeAreaView, View } from "react-native";

import { Box, Button, Container, Text } from "../../../shared-components";
import TextInput from "../../../shared-components/form";
import {
  Routes,
  StackNavigationProps,
} from "../../../shared-components/navigation";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from "./styles";
interface FormData {
  phone_number?: string;
  password?: string;
}

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 4;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }: any) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

function Verify({ navigation }: StackNavigationProps<Routes, "Login">) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }: any) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  const phoneRef = React.useRef<typeof TextInput | null>(null);
  const passwordRef = React.useRef<typeof TextInput | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      phone_number: "",
      password: "",
    },
  });

  // check to see if we're getting data
  const onSubmit = handleSubmit(({ phone_number, password }: FormData) => {
    Alert.alert("Data", `Email: ${phone_number}\nPassword: ${password}`);
    // lets clear the form values
    reset();
  });

  return (
    <Container>
      <Box flex={1} padding="s">
        <Box
          // backgroundColor="transparent"s
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />

        {/* <Text
          variant="loginSubheader"
          textAlign="left"
          color="title"
          fontSize={12}
          marginTop="s"
        >
          Welcome back
        </Text> */}
        <Box marginTop="xxl" />
        <Box
          top={-20}
          justifyContent="center"
          alignContent="center"
          flexDirection="row"
          // backgroundColor="grey"
          marginTop="xxl"
          marginBottom="m"
        >
          <Text
            textAlign="center"
            variant="hero"
            style={{ color: "black", fontSize: 36 }}
          >
            Verify
          </Text>
        </Box>
        <Box
          top={-45}
          justifyContent="center"
          alignContent="center"
          flexDirection="row"
        >
          <Text
            textAlign="center"
            variant="loginSubheader"
            color="shade"
            style={{ marginTop: 37, fontSize: 18 }}
          >
            Enter your code
          </Text>
        </Box>

        <Box
          marginBottom="m"
          top={-20}
          // padding="s"
          // position="relative"
          // style={{
          //   borderColor: phoneRef ? "rgba(7, 90, 81, 0.34)" : "transparent",
          //   borderWidth: value ? 2 : 0,
          //   borderRadius: 4,
          // }}
        >
          <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
          {/* <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="phone-pad"
            // onSubmitEditing={() => phoneRef.current?.focus()}
            returnKeyType="next"
            textAlignVertical="center"
            placeholder="(555) 555-5555"
            textContentType="telephoneNumber"
            ref={phoneRef}
            // onFocus={() => phoneRef.current?.focus()}
          /> */}
        </Box>

        {/* <Controller
          render={({ field: { onBlur, onChange, value, ref } }) => (
            <Box
              marginBottom="m"
              top={-20}
              // padding="s"
              // position="relative"
              // style={{
              //   borderColor: phoneRef ? "rgba(7, 90, 81, 0.34)" : "transparent",
              //   borderWidth: value ? 2 : 0,
              //   borderRadius: 4,
              // }}
            >
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="phone-pad"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                // onSubmitEditing={() => phoneRef.current?.focus()}
                returnKeyType="next"
                textAlignVertical="center"
                placeholder="(555) 555-5555"
                textContentType="telephoneNumber"
                value={value}
                ref={phoneRef}
                // onFocus={() => phoneRef.current?.focus()}
              />
              {errors.phone_number && (
                <Text style={{ color: "red", marginTop: 5 }}>
                  Number required.
                </Text>
              )}
            </Box>
          )}
          control={control}
          name="phone_number"
          rules={{ required: true }}
        /> */}

        <Box alignItems="center" position="relative" style={{ marginTop: 60 }}>
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Explore")}
            label="Done!"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Verify;
