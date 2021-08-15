import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../../shared-components/navigation";
import Login from "./login";
import Signup from "./signup";
import Verify from "./verfiy";
import Explore from "../screens/explore";

import { AntDesign, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomTabParamList } from "../../shared-components/navigation";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const AuthenticationStack = createStackNavigator<Routes>();
export function AuthenticationNavigator() {
  const signedIn = true;

  if (signedIn || BottomTab) {
    return (
      <BottomTab.Navigator
        initialRouteName="Explore"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#6156B0",
          tabBarInactiveBackgroundColor: "#000",
          tabBarLabelStyle: [{ fontSize: 13, fontWeight: "500" }],
          tabBarShowLabel: true,
          tabBarStyle: [{ display: "flex", height: 100 }, null],
        }}
      >
        <BottomTab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: () => (
              <AntDesign name="book" size={30} style={{ color: "#6156B0" }} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  } else {
    return (
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="Login" component={Login} />
        <AuthenticationStack.Screen name="Signup" component={Signup} />
        <AuthenticationStack.Screen name="Verify" component={Verify} />
        <AuthenticationStack.Screen name="Explore" component={Explore} />
      </AuthenticationStack.Navigator>
    );
  }
}
