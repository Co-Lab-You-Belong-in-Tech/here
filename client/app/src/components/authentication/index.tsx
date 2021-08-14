import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../../shared-components/navigation";
import Login from "./login";
import Signup from "./signup";
import Verify from "./verfiy";

const AuthenticationStack = createStackNavigator<Routes>();
export function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="Signup" component={Signup} />
      <AuthenticationStack.Screen name="Verify" component={Verify} />
    </AuthenticationStack.Navigator>
  );
}
