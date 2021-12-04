import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";
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

// export default createSharedElementStackNavigator(
//   {
//     Explore,
//     LocationInfo,
//   },
//   {
//     mode: "modal",
//     headerMode: "none",
//     defaultNavigationOptions: {
//       cardStyleInterpolator: ({ current: { progress } }) => {
//         const opacity = progress.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, 1],
//           extrapolate: "clamp",
//         });
//         return { cardStyle: { opacity } };
//       },
//       gestureEnabled: false,
//       cardStyle: {
//         backgroundColor: "transparent",
//       },
//     },
//   }
// );

export function AuthenticationNavigator() {
  const signedIn = true;

  if (signedIn) {
    return (
      <BottomTab.Navigator
        initialRouteName="Explore"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#6156B0",
          tabBarInactiveTintColor: "#A3A19F",
          tabBarLabelStyle: [{ fontSize: 13, fontWeight: "500" }],
          tabBarShowLabel: true,
          tabBarStyle: [{ display: "flex", height: 100 }, null],
        }}
      >
        <BottomTab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="book" size={30} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="TimeLine"
          component={Explore}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="clockcircleo" size={30} color={color} />
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
