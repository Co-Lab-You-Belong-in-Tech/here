import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../../shared-components/navigation";
import Login from "./login";

const AuthenticationStack = createStackNavigator<Routes>();
export function AuthenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
}
