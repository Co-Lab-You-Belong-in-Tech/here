import React, { SyntheticEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, StyleSheet } from "react-native";

import { Box, Button, Container, Text } from "../../../shared-components";
import TextInput from "../../../shared-components/form";
import {
  Routes,
  StackNavigationProps,
} from "../../../shared-components/navigation";

interface FormData {
  phone_number?: string;
  password?: string;
}

const styles = StyleSheet.create({
  loginBtn: {
    borderWidth: 2,
    borderColor: "#6156B0",
    borderStyle: "solid",
    backgroundColor: "white",
  },
});

function Signup({ navigation }: StackNavigationProps<Routes, "Login">) {
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
            Sign Up
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
            Enter your phone number
          </Text>
        </Box>
        <Controller
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
        />
        <Box
          flexDirection="row"
          justifyContent="center"
          alignContent="center"
          position="relative"
          top={-35}
          marginTop="m"
          marginBottom="m"
          padding="xs"
        >
          <Text
            variant="loginSubheader"
            color="shade"
            marginBottom="l"
            textAlign="center"
            // marginTop="xxl"
            style={{ fontSize: 16, fontWeight: "400" }}
          >
            Message and data rates may apply
          </Text>
        </Box>
        <Box alignItems="center" marginTop="s" top={-35} position="relative">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Verify")}
            label="Next"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
