import { color } from "@shopify/restyle";
import React, { SyntheticEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, Button, Container, Text } from "../../../shared-components";
import TextInput from "../../../shared-components/form";

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

function Login() {
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
          justifyContent="flex-start"
          alignContent="flex-start"
          flexDirection="row"
          // backgroundColor="grey"
          marginTop="xxl"
          marginBottom="m"
        >
          <Text textAlign="left" variant="hero" style={{ color: "black" }}>
            Here
          </Text>
        </Box>
        <Box
          top={-45}
          justifyContent="flex-start"
          alignContent="flex-start"
          flexDirection="row"
        >
          <Text textAlign="left" variant="loginSubheader" color="shade">
            A Co-Lab App
          </Text>
        </Box>
        <Controller
          render={({ field: { onBlur, onChange, value, ref } }) => (
            <Box
              marginBottom="l"
              // style={{
              //   borderColor: phoneRef ? "rgba(7, 90, 81, 0.34)" : "transparent",
              //   borderWidth: value ? 2 : 0,
              //   borderRadius: 4,
              // }}
            >
              <Text
                variant="loginSubheader"
                color="shade"
                marginBottom="s"
                marginTop="xxl"
              >
                Your Phone Number
              </Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="phone-pad"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                // onSubmitEditing={() => passwordRef.current?.focus()}
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

        {/* <Box
          flexDirection="row"
          justifyContent="flex-end"
          alignContent="flex-end"
        >
          <TouchableWithoutFeedback onPress={() => alert("Password Reseted")}>
            <Text
              color="primaryGreen"
              paddingLeft="xl"
              marginLeft="xxl"
              marginTop="m"
              textAlign="right"
              variant="forgetPassword"
            >
              Forgot password?
            </Text>
          </TouchableWithoutFeedback>
        </Box> */}
        <Box alignItems="center" marginTop="l">
          <Button variant="primary" onPress={onSubmit} label="Sign Up" />
        </Box>

        <Box alignItems="center" marginTop="s" padding="xl">
          <Button variant="transparent" onPress={() => true}>
            <Box flexDirection="column" justifyContent="center">
              <Text
                variant="loginSubheader"
                color="grey"
                textAlign="center"
                marginTop="m"
              >
                Already Have an account?
              </Text>
              <Box alignItems="center" marginTop="m">
                <Button
                  onPress={onSubmit}
                  variant="primary"
                  label="Login"
                  style={{
                    borderWidth: 2,
                    borderColor: "#6156B0",
                    borderStyle: "solid",
                    backgroundColor: "white",
                  }}
                />
              </Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
