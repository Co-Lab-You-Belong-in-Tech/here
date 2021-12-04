import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";

// utility interface found from stackoverflow
// support for react navigation 5
export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
  Login: undefined;
  Signup: undefined;
  Verify: undefined;
  Explore: undefined;
  LocationInfo: undefined;
};

export type BottomTabParamList = {
  Explore: undefined;
  TimeLine: undefined;
};